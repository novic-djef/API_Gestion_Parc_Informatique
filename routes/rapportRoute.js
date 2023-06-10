import rapportController from '../controllers/rapportController.js'
import express from 'express'

const router = express.Router()

router.get('/rapports', rapportController.getAllRapport)
router.get('/rapports/:id', rapportController.getRapportById)
router.post('/rapports', rapportController.addRapport)
router.patch('/rapports/:id', rapportController.updateRapport)
router.delete('/rapports/:id', rapportController.deleteRapport)

export default router
