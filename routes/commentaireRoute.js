import commentaireControlleur from '../controllers/commentaireControlleur.js'
import express from 'express'

const router = express.Router()

router.get('/commentaire', commentaireControlleur.getAllCommentaire)
router.get('/commentaire/:id', commentaireControlleur.getCommentaireById)
router.post('/commentaire', commentaireControlleur.addCommentaire)
router.patch('/commentaire/:id', commentaireControlleur.updateCommentaire)
router.delete('/commentaire/:id', commentaireControlleur.deleteCommentaire)

export default router
