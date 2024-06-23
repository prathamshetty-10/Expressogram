import User from "../models/userModel.js";



export const login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user)
        return res.json({ msg: "Incorrect Username or Password", status: false });
      const isPasswordValid = (password==user.password)?true:false;
      if (!isPasswordValid)
        return res.json({ msg: "Incorrect Username or Password", status: false });
      delete user.password;
      return res.json({ status: true, user });
    } catch (ex) {
        console.log(ex);
      next(ex);
    }
  };
export const register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const usernameCheck = await User.findOne({ username });
        if (usernameCheck)
            return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
      
      const user = await User.create({
        email,
        username,
        password: password,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (ex) {
        console.log(ex);
      next(ex);
    }
  };
  export const allusers = async (req, res, next) => {
    try {
      const users=await User.find({_id:{$ne:req.params.id}}).select(["email","username","_id"]);//ne to exclude that id 
      return res.json({  users });
    } catch (ex) {
        console.log(ex);
      next(ex);
    }
  };
