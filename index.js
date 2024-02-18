require('dotenv').config()
const express = require('express')
const {connect} = require('./src/api/utils/db')

connect()
const PORT = 5175
const server = express()

const Character = require('./models/Character')
const router = express.Router()

router.get('/characters', (req, res) => {
  return Character.find()
  .then(characters => {
    //si encontramos los personajes, los devolveremos al usuario
    return res.status(200).json(characters)
  })
  .catch(err => {
    return res.status(500).json(err)
  })
})

server.use('/', router)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})