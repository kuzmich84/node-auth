const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')


const PORT = process.env.PORT || 5000
const DB_URL = 'mongodb+srv://kudim:Kudim1984@cluster0.vpgd6.mongodb.net/auth-node?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/auth/', authRouter)



const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>console.log(`Server started on ${PORT} port`))
    }
    catch (e) {
        console.log(e)
    }
}

start()