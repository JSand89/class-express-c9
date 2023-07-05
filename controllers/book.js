const Book = require('../models/book')

const controllerBook = {
    create: async (req,res) =>{
        try {
            const title = req.body.title
            const author = req.body.author
            const summary = req.body.summary
            const isbn = req.body.isbn
            await Book.create({
                title:title,
                author:author,
                summary:summary,
                isbn:isbn
            })
            return res.json({msg:'create book'})
        } catch (error) {
            return res.status(500).json({msg:error.message})              
        }
    }
}

module.exports = controllerBook