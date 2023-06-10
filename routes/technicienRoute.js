import technicienController from "../controllers/technicienController.js";
import express from "express"


const router = express.Router();

router.get("/techniciens", technicienController.getAllTechnicien)
router.get("/techniciens/:id", technicienController.getUserById)
router.post("/technicien/sign", technicienController.signUpTechnicien)
router.post("/technicien/login", technicienController.login)


export default router