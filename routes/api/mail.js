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
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


var transporter = nodemailer.createTransport(transport)

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};


//register users
router.post('/send', [
  checkToken
], (req, res, next) => {
    
    let name = req.body.name
    let para = 'mail del usuario'
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    let mail = {
      from: name,
      to: para,  // Change to email address that you want to receive messages on
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