const express = require('_express@4.17.1@express')

const router = express.Router()

const RegAndLogin = require('../api/regAndLogin')

router.post('/regist', RegAndLogin.registered)

router.post('/login', RegAndLogin.login)

// 注销
router.post('/logout', RegAndLogin.logout)

module.exports = router
