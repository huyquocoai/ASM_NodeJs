import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    name: String,
    age: String,
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model("product", ProductSchema);
export default ProductModel;
