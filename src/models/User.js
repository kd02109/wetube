import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  githubId: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("BEFORE HASH:", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("HASH:", this.password);
});

const userModel = mongoose.model("User", userSchema);
export default userModel;