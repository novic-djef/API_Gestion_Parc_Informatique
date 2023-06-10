import equipementController from '../controllers/equipementController.js'
import express from 'express'

const router = express.Router()

router.get('/equipements', equipementController.getAllEquipement)
router.get('/equipements/:id', equipementController.getEquipementById)
router.post('/equipements', equipementController.addEquipement)
router.patch('/equipements/:id', equipementController.updateEquipement)
router.delete('/equipements/:id', equipementController.deleteEquipement)

export default router
