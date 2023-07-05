const mongoose = require('mongoose')

const Schema = mongoose.Schema
//ToDo: Genre atribute
const BookSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: Schema.Types.ObjectId, 
        ref: "Author", 
        require: true
    },
    summary:{
        type:String,
        require: true
    },
    isbn:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model("Book", BookSchema)