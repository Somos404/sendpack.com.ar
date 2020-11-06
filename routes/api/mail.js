const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
var nodemailer = require('nodemailer');
const creds = require('../../config/config');

var transport = {
    host: 'smtp.example.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var transporter = nodemailer.createTransport(transport)

//register users
router.post('/send', (req, res, next) => {
    
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    let mail = {
      from: name,
      to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.status(200).send({
			token: 'se envio exitosamente',
			ok:true
		});
      } else {
        res.status(200).send({
			token: 'no se pudo realizar el envio',
			ok:false
		});
      }
    })
})


module.exports = router