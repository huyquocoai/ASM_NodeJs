import express from "express";
import monggoose from "mongoose";
import ProductRouter from "./router/product.js";
import AuthRouter from "./router/auth.js";

const app = express();
app.use(express.json());
app.use("/api/v1", ProductRouter);
app.use("/auth", AuthRouter);
const connectDB = async () => {
  try {
    monggoose.connect(`mongodb://localhost:27017/quanghuy`);
    console.log(`Ket noi thanh cong`);
  } catch (error) {
    console.log(`ket noi falled`);
  }
};

app.listen(4000, () => {
  connectDB();
  console.log(`Endpoint http://localhost:4000`);
});
