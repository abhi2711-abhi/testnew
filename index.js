const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/testnew'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())

const alienRouter = require('./routes/fa')
app.use('/fa',alienRouter)

// plesae use  http://localhost:9000/fa   to see the result


app.listen(9000, () => {
    console.log('server started')
})