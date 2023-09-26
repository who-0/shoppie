const { Strategy } = require("passport-google-oauth20");
const { User } = require("../models");

const config = {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

const AuthOptions = {
  callbackURL: "/api/v1/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

const GoogleAuth = (passport) => {
  passport.use(
    new Strategy(
      AuthOptions,
      async (accessTokne, refreshToken, profile, done) => {
        const newUser = {
          name: profile.displayName,
          image: profile.photos[0].value,
          email: profile.emails[0].value,
        };

        try {
          let user = await User.findOne({ email: newUser.email });
          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (error) {
          console.error(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });
};

module.exports = GoogleAuth;
