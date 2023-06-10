import logicielController from '../controllers/logicielController.js'
import upload from '../middlewares/multer.js'
import express from 'express'

const router = express.Router()

router.get('/logiciels', logicielController.getAllLogiciel)
router.get('/logiciel/:id', logicielController.getLogicielById)
router.post('/logiciel', upload.single('image'), logicielController.addLogiciel)
router.patch('/logiciel/:id', upload.single('image'), logicielController.updateLogiciel)
router.delete('/logiciel/:id', logicielController.deleteLogiciel)

export default router
