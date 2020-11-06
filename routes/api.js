const router = require('express').Router()
const middlewares = require('./middlewares')
const apiUsers = require('./api/users')
const apiUsers = require('./api/mail')
const apiGoogle = require('./apiGoogle/maps')

//router.use('/otracosa', middlewares.checkToken, otraRuras)
router.use('/users', apiUsers);
router.use('/maps', apiGoogle);
router.use('/mail', apiGoogle);
 
module.exports = router