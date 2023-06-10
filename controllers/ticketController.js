import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { ticket: Ticket } = prisma
const { admin: Admin } = prisma

export default {
  getAllTicket(req, res) {
    Ticket.findMany()
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
  getTicketById(req, res) {
    const id = req.params.id
    Ticket.findUnique({ where: { id: parseInt(id) } })
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
  addTicket(req, res) {
    const ticket = {
      nom: req.body.nom,
      description: req.body.image,
      interventionId: req.body.interventionId
    }
    Ticket.create(ticket)
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
  deleteTicket(req, res) {
    const id = req.params.id
    Ticket.delete({ where: { id: parseInt(id) } })
      .then((result) => {
        res.status(201).json({
          message: 'ticket delete success',
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
