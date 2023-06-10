import materialController from '../controllers/materielController.js'
import upload from '../middlewares/multer.js'
import express from 'express'

const router = express.Router()

router.get('/materials', materialController.getAllHardware)
router.get('/material/:id', materialController.getHarwareById)
router.post('/material', upload.single('image'), materialController.addHardware)
router.patch('/material/:id', materialController.updateHardware)
router.delete('/material/:id', materialController.deleteHardware)

export default router
