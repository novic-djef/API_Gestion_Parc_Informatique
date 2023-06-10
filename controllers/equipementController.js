import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { equipement: Equipement } = prisma

export default {
  getAllEquipement(req, res) {
    Equipement.findMany()
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

  getEquipementById(req, res) {
    const id = req.params.id
    Equipement.findUnique({ where: { id: parseInt(id) } })
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

  addEquipement(req, res) {
    const equipement = {
      nom: req.body.nom,
      image: req.body.image,
      date_achat: req.body.date_achat,
      categorieId: req.body.categorieId,
    }
    Equipement.create(equipement)
      .then((result) => {
        res.status(200).json({
          message: 'equipement create success',
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
  deleteEquipement(req, res) {
    const id = req.params.id
    Equipement.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'equipement delete success',
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
  updateEquipement(req, res) {
    const id = req.params.id
    const equipement = {
      nom: req.body.nom,
      image: req.body.image,
      date_achat: req.body.date_achat,
      categorieId: req.body.categorieId,
    }
    Equipement.update(equipement, { where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'equpement update success',
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
