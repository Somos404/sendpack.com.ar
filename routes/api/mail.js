const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
var nodemailer = require('nodemailer');
const creds = require('../../config/config');
const {checkToken} = require('../middlewares') 

var transport = {
    host: 'webmail.sendpack.com.ar',
    port: 25,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});


var transporter = nodemailer.createTransport(transport)

//register users
router.post('/send', [
  checkToken
], async (req, res, next) => {

    const user = await User.findOne({
      where: {
          id: req.usuarioId
      }
    })


   /*  datosEnvio: datosEnvio,
    tiempo: tiempo,
    distancia: distancia,
    costoEstimado: costoEstimado */

    /* let datosEnvio = req.body.datosEnvio
    let name = user.name
    let para = user.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} ` */

    let content = `Hola!: ${user.name} ${user.last_name} \n este mail es por x motivo \n timepo: ${req.body.tiempo} \n distnacia: ${req.body.distancia} `
    let mail = {
      from: creds.USER,
      to: user.email,  // Change to email address that you want to receive messages on
      subject: 'cotizaciones sendpack',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {

        //grabo db el envio solicitado
        res.status(200).send({
          msg: 'se envio exitosamente',
          ok:true
		    });
      } else {
        res.status(200).send({
          msg: 'no se pudo realizar el envio',
          ok:false
		  });
      }
    })
})


module.exports = router