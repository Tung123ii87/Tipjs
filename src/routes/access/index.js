'use strict'

const express = require('express')
const { asyncHandler } = require('../../auth/checkAuth')
const accessController = require('../../controlles/access.controller')
const router = express.Router()

//signUp

router.post('/shop/signup', asyncHandler(accessController.signUp))
router.post('/shop/login', asyncHandler(accessController.login))

module.exports = router