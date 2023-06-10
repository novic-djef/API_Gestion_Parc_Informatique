import userController from "../controllers/userController.js";
import express from 'express'

const router = express.Router();

router.get("/users", userController.getAllUser);
router.get("/users/:id", userController.getUserById);
router.post("/user", userController.signUpUser);


export default router


