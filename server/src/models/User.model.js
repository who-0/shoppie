import { config } from "dotenv";
config();
import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
  password: {
    type: String,
    required: [true, "Please Provide Password"],
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
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, email: this.email }, key, {
    expiresIn: "5m",
  });
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
