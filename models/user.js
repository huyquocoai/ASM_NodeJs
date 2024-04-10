import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
