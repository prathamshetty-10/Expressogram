import {
    login,
    register,
    setAvatar
    
  } from "../controllers/userController.js";
  import express from 'express'

  const router = express.Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.post("/setavatar/:id", setAvatar);

  export default router;