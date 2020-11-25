const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
const nodemailer = require("nodemailer");
const creds = require('../../config/config');
const {checkToken} = require('../middlewares')


router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});

const smtpTransport = nodemailer.createTransport({
	host: "webmail.sendpack.com.ar",
	port: 465,
  	secure: true, // use TLS
	auth: {
		user: 'sendpack@sendpack.com.ar',
    	pass: 'Sendpack!2020'
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

//contact mail  
router.post('/contact',[
	checkToken
], async (req, res) => {
	
	
	let mailOptionSendpack = {
	  from: 'sendpack@sendpack.com.ar',
	  to: 'cotizaciones.sendpack@gmail.com',
	  subject: 'Sendpack Cotización',
	  html: `
            <table style="max-width: 800px; padding: 10px; margin:0 auto; border-collapse: collapse;">
				<tr>
					<td style="background-color: #ecf0f1">
						<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
							<h2 style="color: #e67e22; margin: 0 0 7px">Hola!</h2>
							<p style="margin: 2px; font-size: 15px">
								El usuario  ${req.body.nombre} consulta en el formulario de contactos!
							</p>
							<p></p>
							<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
								<h2 style="color: #e67e22; margin: 0 0 7px">Datos de contacto</h2>
								<ul>
									<li>Email: ${req.body.email}</li>
									<li>tel: ${req.body.telefono}</li>
									<li style="margin-top: 1em;"><a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://web.whatsapp.com/send?phone=+549${req.body.tel}">LINK WHATSAPP WEB</a></li>
								</ul>
							</div>
							<p>Detalle del envío</p>
							<ul>
								<li>Origen: ${req.body.mensaje}</li>
							</ul>
							<div style="width: 100%; text-align: center">
								<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://sendpack.com.ar">Ir a la página</a>	
							</div>
							<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">sendpack.com.ar </p>
						</div>
					</td>
				</tr>
			</table>
          `
	};

	smtpTransport.sendMail(mailOptionSendpack, function (err) {
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
	
	res.status(200).send({
			token: 'fallo al enviar email',
			ok:true
	});
	
 

})


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
	  subject: 'Sendpack Cotización',
	  html: `
            <table style="max-width: 800px; padding: 10px; margin:0 auto; border-collapse: collapse;">
				<tr>
					<td style="background-color: #ecf0f1">
						<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
							<h2 style="color: #e67e22; margin: 0 0 7px">Hola! ${user.last_name} , ${user.name}</h2>
							<p style="margin: 2px; font-size: 15px">
								Presupuesto!
							</p>
							<p></p>
							<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
								<div style="padding: 0; width: 590px; margin: 5px;  float:left;">
									<img style="padding: 0; width: 290px; margin: 5px;" src="https://sendpack.com.ar/static/media/infoBackground.8d0550a5.jpeg">
								</div>
							</div>
							<p>Detalle del envío</p>
							<ul>
								<li>Origen: ${req.body.datosEnvio.origen}</li>
								<li>CP Origen: ${req.body.datosEnvio.cpOrigen}</li>

								<li>Destino: ${req.body.datosEnvio.destino}</li>
								<li>CP Destino: ${req.body.datosEnvio.cpDestino}</li>

								<li>Distancia: ${req.body.distancia.text}</li>
								<li>Tiempo estimado: ${req.body.tiempo.text}</li>

								<li>Pago en: ${req.body.datosEnvio.pagoOrigen? "Origen": "Destino"}</li>
								<li>Cantidad de bultos: ${req.body.datosEnvio.cantBultos}</li>
								<li>Peso: ${req.body.datosEnvio.peso}</li>
								<li>Valor declarado: ${req.body.datosEnvio.valorDeclarado}</li>

								<li>Costo Estimado: ${req.body.costoEstimado}</li>
							</ul>
							<div style="width: 100%; text-align: center">
								<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://sendpack.com.ar">Ir a la página</a>	
							</div>
							<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">sendpack.com.ar </p>
						</div>
					</td>
				</tr>
			</table>
          `
	};
	
	let mailOptionSendpack = {
	  from: 'sendpack@sendpack.com.ar',
	  to: 'cotizaciones.sendpack@gmail.com',
	  subject: 'Sendpack Cotización',
	  html: `
            <table style="max-width: 800px; padding: 10px; margin:0 auto; border-collapse: collapse;">
				<tr>
					<td style="background-color: #ecf0f1">
						<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
							<h2 style="color: #e67e22; margin: 0 0 7px">Hola!</h2>
							<p style="margin: 2px; font-size: 15px">
								El usuario  ${user.last_name} , ${user.name} realizo una cotización!
							</p>
							<p></p>
							<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
								<h2 style="color: #e67e22; margin: 0 0 7px">Datos de contacto</h2>
								<ul>
									<li>Email: ${user.email}</li>
									<li>tel: ${req.body.tel}</li>
									<li style="margin-top: 1em;"><a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://web.whatsapp.com/send?phone=+549${req.body.tel}">LINK WHATSAPP WEB</a></li>
								</ul>
							</div>
							<p>Detalle del envío</p>
							<ul>
								<li>Origen: ${req.body.datosEnvio.origen}</li>
								<li>CP Origen: ${req.body.datosEnvio.cpOrigen}</li>

								<li>Destino: ${req.body.datosEnvio.destino}</li>
								<li>CP Destino: ${req.body.datosEnvio.cpDestino}</li>

								<li>Distancia: ${req.body.distancia.text}</li>
								<li>Tiempo estimado: ${req.body.tiempo.text}</li>

								<li>Pago en: ${req.body.datosEnvio.pagoOrigen? "Origen": "Destino"}</li>
								<li>Cantidad de bultos: ${req.body.datosEnvio.cantBultos}</li>
								<li>Peso: ${req.body.datosEnvio.peso}</li>
								<li>Valor declarado: ${req.body.datosEnvio.valorDeclarado}</li>

								<li>Costo Estimado: ${req.body.costoEstimado}</li>
							</ul>
							<div style="width: 100%; text-align: center">
								<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://sendpack.com.ar">Ir a la página</a>	
							</div>
							<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">sendpack.com.ar </p>
						</div>
					</td>
				</tr>
			</table>
          `
	};
	smtpTransport.sendMail(mailOptionSendpack, function (err) {
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
	
	res.status(200).send({
			token: 'fallo al enviar email',
			ok:true
	});
	
 

})


module.exports = router