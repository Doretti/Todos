const express = require('express')
const router = express.Router()

const Todo = require('../models/Todo')

router.get('/', async (req, res) => {
    res.json(await Todo.find())
})

router.post('/', async (req, res) => {
    const todo = new Todo(req.body)
    await todo.save()
    res.json({state: 'success'})
})

router.get('/:id', async (req, res) => {
    res.json(await Todo.findById(req.params.id))
})

router.put('/:id', async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({state: 'updated'})
})

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'})
})

module.exports = router;