import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { materiel: Materiel } = prisma

export default {
  getAllHardware(req, res) {
    Materiel.findMany()
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

  getHarwareById(req, res) {
    const id = req.params.id
    Materiel.findUnique({ where: { id: parseInt(id) } })
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

  addHardware(req, res) {
    console.log(req.file)
    const materiel = {
      nom: req.body.nom,
      image: req.file.filename,
      marque: req.body.marque,
      quantite: parseInt(req.body.quantite),
    }
    console.log(materiel)
    Materiel.create({ data: materiel })
      .then((result) => {
        res.status(200).json({
          message: 'hardware create success',
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
  deleteHardware(req, res) {
    const id = req.params.id
    Materiel.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'hardware delete success',
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
  updateHardware(req, res) {
    const id = req.params.id
    const materiel = {
      nom: req.body.nom,
      image: req.file.filename,
      marque: req.body.marque,
      quantite: req.body.quantite,
    }
    Materiel.update({ data: materiel }, { where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'hardware update success',
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
