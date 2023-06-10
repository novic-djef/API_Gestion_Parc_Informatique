import categorieController from '../controllers/categorieController.js'
import express from 'express'

const router = express.Router()

router.get('/tickets', categorieController.getAllCategorie)
router.get('/tickets/:id', categorieController.getCategorieById)
router.post('/ticket', categorieController.addCategorie)
router.delete('/ticket/:id', categorieController.deleteCategorie)
router.patch('/ticket/:id', categorieController.updateCategorie)

export default router
