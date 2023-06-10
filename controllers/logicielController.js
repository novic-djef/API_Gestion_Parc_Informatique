import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { logiciel: Logiciel } = prisma

export default {
  getAllLogiciel(req, res) {
    Logiciel.findMany()
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
  getLogicielById(req, res) {
    const id = req.params.id
    Logiciel.findUnique({ where: { id: parseInt(id) } })
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
  addLogiciel(req, res) {
    const logiciel = {
      nom: req.body.nom,
      version: req.body.version,
      image: req.file.filename,
      licence: parseInt(req.body.licence),
    }
    console.log(logiciel)
    Logiciel.create({ data: logiciel })
      .then((result) => {
        res.status(200).json({
          message: 'software create success',
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
  updateLogiciel(req, res) {
    const id = req.params.id
    const logiciel = {
      nom: req.body.nom,
      licence: req.body.licence,
      version: req.body.version,
      image: req.file.filename,
    }
    //console.log(logiciel)
    Logiciel.update({ where: { id: parseInt(id) } }, { data: logiciel })
      .then((result) => {
        res.status(201).json({
          message: 'Software update success',
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
  deleteLogiciel(req, res) {
    const id = req.params.id
    Logiciel.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'Software delete success',
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
