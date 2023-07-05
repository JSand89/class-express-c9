const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const authorRoutes = require('./routes/author')
const bookRoutes = require('./routes/book')

const app = express()
const port = 3005
//middlewares
app.set('port',port)
app.use(express.json())
app.use('/api/author',authorRoutes)
app.use('/api/book',bookRoutes)

app.get('/',(req,res) => {
    res.send('Hola Mundo')
})

//app.post('/api/author/create',controllerAuthor.create)


mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=> console.error(err))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})