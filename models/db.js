const { ObjectID } = require('mongodb')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const testSchema = new mongoose.Schema({

    userId: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true,
        unique:true
    },
    title: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Test',testSchema)