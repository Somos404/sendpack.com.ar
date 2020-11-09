const router = require('express').Router()
const { User } = require('../../db')
const bcrypt = require('bcrypt-nodejs')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//register users
router.post('/logReg', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail(),
    check('last_name', 'El apellido es requerido').not().isEmpty()
], async (req, res) => {
    
    const errors = validationResult(req.body)
	
    if (!errors.isEmpty()) {
        console.log('validacion fallida');
        return res.status(422).json({ errores: errors.array() })
    }
	
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (user) {
        console.log('usuario ya existente solo log');
		res.status(200).send({
			token: createToken(user),
			ok:true
		});
    } else {
        console.log('crea usuario luego log');
        const salt = bcrypt.genSaltSync();
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const user = User.create(req.body)
		res.status(200).send({
			token: createToken(user),
			ok:true
		});
    }
})

//register users
router.post('/register', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()
], async (req, res) => {
    
    const errors = validationResult(req.body)
	
    if (!errors.isEmpty()) {
        console.log('validacion fallida');
        return res.status(422).json({ errores: errors.array() })
    }
	
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (user) {
		res.status(200).send({
			error: 'email ya se encuentra en uso',
			ok:false
		});
    } else {
        const salt = bcrypt.genSaltSync();
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const user = User.create(req.body)
		res.status(200).send({
			token: createToken(user),
			ok:true
		});
    }
})
//login users
router.post('/login', [
    check('password', 'El password obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()
], async (req, res) => {
	
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
	 
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password)
        if (iguales) {
            res.status(200).send({
                token: createToken(user),
                ok:true
            });
        } else {
            res.status(200).send({
                error: 'Error en contraseña',
                ok:false
            });
        }
    } else {
        res.status(200).send({
            error: 'Error en usuario',
            ok:false
        });
    }
})

const createToken = (user) => {
    const payload = {
        usuarioEmail : user.email,
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(500, 'minutes').unix()
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