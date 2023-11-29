const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const key = process.env.SECRET_KEY;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Username"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  phone: {
    type: Number,
    default: 9,
    minLength: 1,
    maxLength: 10,
  },
  password: {
    type: String,
    minLength: 6,
    select: false,
  },
  role: {
    type: String,
    required: true,
    select: false,
    enum: ["normal", "admin", "test"],
    default: "normal",
  },
  
},{timestamps:true});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await encryptPassword(this.password);
});

UserSchema.pre("findOneAndUpdate", async function () {
  const password = this._update.password;
  if (!password) return;
  this._update.password = await encryptPassword(password);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, email: this.email }, key, {
    expiresIn: "356d",
  });
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

const encryptPassword = async (pwd) => {
  const salt = await bcrypt.genSalt(10);
  const cryptedPassword = await bcrypt.hash(pwd, salt);
  return cryptedPassword;
};

module.exports = mongoose.model("User", UserSchema);
