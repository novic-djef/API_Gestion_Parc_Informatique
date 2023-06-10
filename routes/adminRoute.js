import adminController from '../controllers/adminController.js'
import express from 'express'
import upload from '../middlewares/multer.js'

const router = express.Router()

router.get('/administrators', adminController.getAllAdmin)
router.get('/administrator/:id', adminController.getAdminById)
router.post('/administrator/signIn',upload.single('image'), adminController.signUpAdmin)
router.post('/administrator/login', adminController.login)

export default router
