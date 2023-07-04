import fournisseurController from "../controllers/fournisseurController.js";
import express from "express"


const router = express.Router();

router.get("/fourniseur", fournisseurController.getAllFournisseur)
router.get("/fourniseur/:id", fournisseurController.getFournisseurById)
router.post("/technicien/sign", fournisseurController.signUpFournisseur)
router.post("/technicien/login", fournisseurController.login)


export default router