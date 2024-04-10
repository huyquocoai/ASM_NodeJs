import ProductModel from "../models/product.js";
export const getAllProduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    return res.status(200).json({ status: true, data: product });
  } catch (error) {
    return res.status(503).json({ status: false, message: "Lỗi request" });
  }
};
export const getProductByID = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.find({ _id: id });
    return res.status(200).json({ status: true, data: product });
  } catch (error) {
    return res.status(503).json({ status: false, message: "Lỗi request" });
  }
};
export const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const productmodel = new ProductModel(body);
    const product = await productmodel.save();
    return res.status(200).json({ status: true, data: product });
  } catch (error) {
    return res.status(503).json({ status: false, message: "Lỗi request" });
  }
};
export const UpdateProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = res.params.id;
    const product = await ProductModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res
      .status(200)
      .json({ status: true, data: product, message: "Cap nhat thanh cong" });
  } catch (error) {
    return res.status(503).json({ status: false, message: "Lỗi request" });
  }
};
export const DeleteProduct = async (req, res) => {
  try {
    const id = res.params.id;
    const product = await ProductModel.findOneAndDelete({ _id: id });
  } catch (error) {
    return res.status(503).json({ status: false, message: "Lỗi request" });
  }
};
