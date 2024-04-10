import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
export const Register = async (req, res) => {
  try {
    const body = req.body;
    body.password = await bcrypt.hash(body.password, 10);
    const usermodel = new UserModel(body);
    const user = await usermodel.save();
    res.send({ user: user, message: "Dang ki thanh cong" });
  } catch (error) {
    res.send({ message: "Dang ki khong thanh cong" });
  }
};

export const Login = async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email });
    if (user === null) {
      res.send({ message: " khong tim thay tai khoan" });
    } else {
      const verify = await bcrypt.compare(body.password, user.password);
      if (verify) {
        const token = await JsonWebTokenError.sign({ id: user.id }, "123456");
        res.send({
          status: true,
          message: "Dang nhap thanh cong",
          token: token,
        });
      } else {
        res.send({
          status: true,
          message: "Sai ten dang nhap hoac mat khau",
          token: token,
        });
      }
    }
  } catch (error) {}
};
