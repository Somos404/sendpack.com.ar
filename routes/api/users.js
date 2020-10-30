const router = require('express').Router()
const { User } = require('../../db')
const bcrypt = require('bcrypt-nodejs')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')

//register users
router.post('/register', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()
], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    const salt = bcrypt.genSaltSync();
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    const user = User.create(req.body)
    res.json(user)
})
//login users
router.post('/login', async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password)
        if (iguales) {
            res.json({success: createToken(user)})
        } else {
            res.json({ error: 'Error en usuario y/o contraseña' })
        }
    } else {
        res.json({ error: 'Error en usuario y/o contraseña' })
    }
})

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'key-secret-sendp')
}


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.post('/', async (req, res) => {
    const users = await User.create(req.body)
    res.json(users)
})

router.put('/:user_id', async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.user_id }
    })
    res.json({ success: 'Se ha modificado' })
})

router.delete('/:user_id', async (req, res) => {
    await User.destroy({
        where: { id: req.params.user_id }
    })
    res.json({ success: 'Se ha eliminado' })
})

module.exports = router