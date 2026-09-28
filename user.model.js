const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"]
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be greater than 0"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);