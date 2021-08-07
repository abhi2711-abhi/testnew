const express = require('express')
const router = express.Router()
const Alien = require('../models/db')

router.get('/', async(req, res) => {
    try {
            const abhi = await Alien.find({}, {__v: 0, _id: 0})
            res.json(abhi)
    } catch (error) {
        res.send('error' + err)
    }
})

router.get('/todos', async(req, res) => {
    try{
            const alien = await Alien.find({},{__v:0, _id: 0, userId: 0})
            res.json(alien)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/user/:userId', async(req, res) => {
    try{
            const alien = await Alien.find({},{__v:0, _id: 0, userId: 0})
            res.json(alien)
            
    }catch(err){
        res.send('error ' + err)
    }
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

module.exports = router