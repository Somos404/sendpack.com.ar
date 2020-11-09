const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
const nodemailer = require("nodemailer");
const creds = require('../../config/config');
const {checkToken} = require('../middlewares') 
const { initial_address } = require('../../db')


router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});

const smtpTransport = nodemailer.createTransport({
	host: "webmail.misia.com.ar",
	port: 465,
  	secure: true, // use TLS
	auth: {
		user: 'misia@misia.com.ar',
    	pass: 'Misia!2020'
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

//enviar mail  
router.post('/send',[
	checkToken
], async (req, res) => {
	
	const user = await User.findOne({
      where: {
          id: req.usuarioId
      }
    })
	
	let mailOptions = {
	  from: 'sendpack@sendpack.com.ar',
	  to: user.email,
	  subject: 'Sendpack cotizacion',
	  text: 'Have the most fun you can in a car. Get your Tesla today!'
	};
	
	smtpTransport.sendMail(mailOptions, function (err) {
	  if (err) {
		res.status(200).send({
			token: 'fallo al enviar email',
			ok:false
		});
	  } else {
		//grabar en db los datos del mail cuando envia el mail aunque puede tardar no se ejecuata  hasta que envia el mail puede pasar uno minutos para eso....
		res.status(200).send({
			token: 'email enviado',
			ok:false
		});
	  }
	});	
	
	// grabar en db y retornar msj api es inmediato sin importar si envia o no el mail
    
})


module.exports = router