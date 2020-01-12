// 引入express 模块
const express = require('_express@4.17.1@express')

const router = express.Router()

// 引入pro.js
const Pro = require('../api/proOperate')

router.post('/add', Pro.add)

router.post('/getList', Pro.getList)

router.post('/getMyPro', Pro.getMyPro)

router.post('/delMember', Pro.delMember)

router.post('/join', Pro.join)

router.post('/query', Pro.query)

router.post('/del', Pro.del)

router.post('/update', Pro.update)

module.exports = router
