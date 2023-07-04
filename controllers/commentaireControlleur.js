import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { commentaire: Commentaire } = prisma

export default {
  getAllCommentaire(req, res) {
    Commentaire.findMany()
      .then((data) => {
        if (data) {
          res.status(200).json(data)
        } else {
          res.status(404).json({ message: 'not found data' })
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
  },

  getCommentaireById(req, res) {
    const id = req.params.id
    Commentaire.findUnique({ where: { id: parseInt(id) } })
      .then((data) => {
        if (data.length > 0) {
          res.status(200).json(data)
        } else {
          res.status(404).json({ message: 'not found data' })
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
  },

  addCommentaire(req, res) {
    const commentaire = {
      nom: req.body.nom,
      userImage: req.body.image,
      message: req.bady.message,
      date_publication: req.body.date_publication,
      userId: req.body.userId,
    }
    Commentaire.create(commentaire)
      .then((result) => {
        res.status(200).json({
          message: 'commentaire create success',
          result,
        })
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
  },
  deleteCommentaire(req, res) {
    const id = req.params.id
    Commentaire.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'commentaire delete success',
          result,
        })
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
  },
  updateCommentaire(req, res) {
    const id = req.params.id
    const commentaire = {
        nom: req.body.nom,
        userImage: req.body.image,
        message: req.bady.message,
        date_publication: req.body.date_publication,
        userId: req.body.userId,
    }
    Commentaire.update(commentaire, { where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'commentaire update success',
          result,
        })
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
  },
}
