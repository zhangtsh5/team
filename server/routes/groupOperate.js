// 引入express 模块
const express = require('express')

const router = express.Router()

// 引入pro.js
const Pro = require('../api/groupOperate')

router.post('/add', Pro.add)

router.post('/getGroupList', Pro.getGroupList)

router.post('/getMyGroup', Pro.getMyGroup)

router.post('/delMember', Pro.delMember)

router.post('/join', Pro.join)

router.post('/query', Pro.query)

router.post('/del', Pro.del)


module.exports = router
