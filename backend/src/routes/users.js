const express = require('express')

const getElement = require('../controllers/users')

const router = express.Router()


router.get('/', getElement)




module.exports = router