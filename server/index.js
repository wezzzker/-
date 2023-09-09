require('dotenv').config()
const cors = require('cors')
const express = require('express')
var db = require('./db')

const router = require('./routes/index')
const errorHandler = require('./errors/errorHandler')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)

app.use(errorHandler)

const start = async () => {
    try {
        db.authenticate()
        await db.sync()
        app.listen(PORT,()=> console.log(`server OK start on ${PORT}`))

    } catch (error) {
        console.log(error);
    }
}


start()