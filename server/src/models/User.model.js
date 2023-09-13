import mongoose from "mongoose";
import validator from "validator";

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
    enum: ["normal", "admin", "test"],
    default: "normal",
  },
});

export default mongoose.model("User", UserSchema);