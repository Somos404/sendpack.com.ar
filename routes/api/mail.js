const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
var nodemailer = require('nodemailer');
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


//register users
router.post('/send', [
  checkToken
], async (req, res, next) => {

    const user = await User.findOne({
      where: {
          id: req.usuarioId
      }
    })


var transporter = nodemailer.createTransport({
   host: 'webmail.sendpack.com.ar',
  port: 25,
  secure: false,
  auth: {
      user: 'sendpack@sendpack.com.ar',
      pass: 'Sendpack!2020'
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
  
    let info = await transporter.sendMail({
      from: `" <>`, // sender address
      to: user.email, // list of receivers
      subject: "Tu solicitud de préstamo IPDUV Refacciones ha sido recibida", // Subject line
      html: `
          <p>Recibimos tu solicitud de préstamo línea Refacciones IPDUV con Tuya Recargable. </p>
          <p>La misma será analizada y en los próximos días, un asesor de Nuevo Banco del Chaco se comunicará para informarte el estado de la gestión.</p>


          <div style="display: table; font-weight: bold; margin: 50px 0">
          <div style="display: table-row">
                  <span style="display: table-cell">NÚMERO DE SOLICITUD:</span>
          </div>
          <div style="display: table-row">
                  <span style="display: table-cell">NÚMERO DE TRÁMITE:</span>
          </div>
          <div style="display: table-row">
                  <span style="display: table-cell">DNI:</span>
          </div>
          </div>

          <p>Muchas gracias por elegirnos.</p>
      `
  })

    
})


module.exports = router