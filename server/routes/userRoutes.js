import {
    login,
    register,
    allusers,
    logout
  } from "../controllers/userController.js";
  import express from 'express'

  const router = express.Router();
  
  router.post("/login", login);
  router.post("/register", register);
 
  router.post("/allusers/:id",allusers)//all users excluding ourself
  router.post("/logout/:id",logout);

  export default router;