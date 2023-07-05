const express = require('express')

const controllerBook = require('../controllers/book')

const router = express.Router()

router.get('/',controllerBook.getBooks)
router.get('/:id', controllerBook.getBookById)
router.post('/create', controllerBook.create)
router.patch('/update/:id',controllerBook.updateBook)
router.delete('/delete/id',controllerBook.deleteBook)

module.exports = router