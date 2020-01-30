// 引入express 模块
const express = require('express')

const router = express.Router()

// 引入task.js
const Task = require('../api/taskOperate')

router.post('/getTaskList', Task.getTaskList)

module.exports = router
