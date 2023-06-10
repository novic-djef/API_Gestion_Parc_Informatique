import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { categorie: Categorie } = prisma


export default {
  getAllCategorie(req, res) {
    Categorie.findMany()
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

  getCategorieById(req, res) {
    const id = req.params.id
    Categorie.findUnique({ where: { id: parseInt(id) } })
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

  addCategorie(req, res) {
    const categorie = {
      libelle: req.body.libelle,
      image: req.body.image,
    }
    Categorie.create(categorie)
      .then((result) => {
        res.status(200).json({
          message: 'Categorie create success',
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

  deleteCategorie(req, res) {
    const id = req.params.id
    Categorie.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'categorie delete success',
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

  updateCategorie(req, res) {
    const id = req.params.id
    const categorie = {
      libelle: req.body.libelle,
      image: req.body.image,
    }
     Categorie.update(categorie, { where: { id: parseInt(id) } })
       .then((result) => {
         res.status(201).json({
           message: 'categorie update success',
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