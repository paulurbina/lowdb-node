const { Router } = require('express')
const router = Router()

const { getTasks, createTask, getTask, updatetask, deletetask } = require('../controllers/task.controller')

router.get('/task', getTasks)
router.get('/task/:id', getTask)
router.post('/task', createTask)
router.put('/task/:id', updatetask)
router.delete('/task/:id', deletetask)

module.exports = router