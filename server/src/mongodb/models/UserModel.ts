import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: String, // store image as base64 string
});


export default mongoose.model("UserModel", userSchema);