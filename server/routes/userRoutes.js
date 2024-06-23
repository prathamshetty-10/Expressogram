import {
    login,
    register,
    allusers
  } from "../controllers/userController.js";
  import express from 'express'

  const router = express.Router();
  
  router.post("/login", login);
  router.post("/register", register);
 
  router.post("/allusers/:id",allusers)//all users excluding ourself

  export default router;