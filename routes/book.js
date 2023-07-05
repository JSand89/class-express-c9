const express = require('express')

const controllerBook = require('../controllers/book')

const router = express.Router()

router.post('/create', controllerBook.create)

module.exports = router