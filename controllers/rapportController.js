import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { rapport: Rapport } = prisma
const { admin: Admin } = prisma

export default {
  getAllRapport(req, res) {
    Rapport.findMany()
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

  getRapportById(req, res) {
    const id = req.params.id
    Rapport.findUnique({ where: { id: parseInt(id) } })
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

  addRapport(req, res) {
    const rapport = {
      description: req.body.description,
      technicienId: req.body.technicienId,
      ticketId: req.body.technicienId,
    }
    Rapport.create(rapport)
      .then((result) => {
        res.status(200).json({
          message: 'rapport create success',
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

  deleteRapport(req, res) {
    const id = req.params.id
    Rapport.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'rapport delete success',
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
  updateRapport(req, res) {
    const id = req.params.id
    const rapport = {
      description: req.body.description,
      technicienId: req.body.technicienId,
      ticketId: req.body.technicienId,
    }
    Rapport.update(rapport, { where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'rapport update success',
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
