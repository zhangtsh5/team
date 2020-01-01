// 引入express 模块
const express = require('express')

const router = express.Router()

// 引入pro.js
const Pro = require('../api/addAndDelete')

router.post('/add', Pro.add)

router.post('/query', Pro.query)

router.post('/del', Pro.del)

router.post('/update', Pro.update)

module.exports = router
