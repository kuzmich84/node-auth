const Router = require('express')
const router = new Router()
const authController = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./authMiddleware/authMiddleware')
const roleMiddleware = require('./authMiddleware/roleMiddleware]')

router.post('/registration', [
    check('username', "Username is not be empty").notEmpty(),
    check('password', "Password must have min 4 max 10 character").isLength({min: 4, max: 10})
], authController.registration)
router.post('/login', authController.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), authController.getUsers)

module.exports = router