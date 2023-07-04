import pkg from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const { fournisseur: Fournisseur } = prisma

export default {
signUpFournisseur(req, res){
    Fournisseur.findUnique({ where: { email: req.body.email } })
      .then((result) => {
        if (result) {
          res.status(409).json({
            message: 'Email already Existe',
          })
        } else {
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (error, hash) {
              const fournisseur = {
                email: req.body.email,
                password: hash,
                username: req.body.username,
                phone: req.body.phone,
                image: req.body.image,
              }
              fournisseur.create(fournisseur)
                .then((result) => {
                      res.status(200).json({
                        message: 'Fournisseur created succes',
                        fournisseur: result,
                      })
                    })
                    .catch((error) => {
                      res.status(500).json({
                        message: 'Somthing went Wrong',
                        error: error,
                      })
                    })
                })
                .catch((error) => {
                  res.status(500).json({
                    message: 'Somthing went Wrong',
                    error: error,
                  })
                })
            })
         
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
    })
},

getAllFournisseur(req, res){
    Fournisseur.findMany()
      .then((data) =>{ 
      if (data.length > 0) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: 'not found data' })
      }
      }
      )
      .catch((error) => {
        res.status(500).json({
          message: "Somthing went Wrong",
          error: error,
        });
      });
},

getFournisseurById(req, res) {
    const id = req.params.id
    Fournisseur.findUnique({ where: { id: parseInt(id) } })
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
login(req, res){
    Fournisseur.findUnique({ where: { email: req.body.email } })
      .then((fournisseur) => {
        if (fournisseur == null) {
          console.log(res)
          res.status(401).json({
            message: "fournisseur Doesn't exist",
          })
        } else {
          bcrypt.compare(req.body.password,  user.password, function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                    email: user.email,
                    userId: user.id,
                },
                'secret',
                function (error, token) {
                  res.status(200).json({
                    message: ' Authentication successful',
                    user: user,
                    token: token,
                  })
                }
              )
            } else {
              res.status(401).json({
                message: 'Invalid credential',
              })
            }
          })
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Somthing went Wrong',
          error: error,
        })
      })
}
}