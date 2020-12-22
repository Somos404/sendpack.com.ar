const app = require("./app")

const PORT = process.env.PORT || 5000

const { development } = require('./config/config.json')
const mysql = require('mysql')
const { Sequelize } = require('sequelize');
//MySql
const connection = mysql.createConnection({
    host: `${development.host}`,
    user: `${development.username}`,
    password: `${development.password}`,
    database: `${development.database}`
})

// Check connect
/* if (connection.state === 'disconnected') {
    console.log('mysql disconnected OFF')
} */

const mercadopago = require ('mercadopago');

//middleware


// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-327784668252270-111502-2ac20dc1d5088b2e30bb07d2bfef4cbf-672708481'
  });

//routes
app.post('/checkout', (req, res) => {
// Crea un objeto de preferencia

let preference = {
    "back_urls": {
        "success": "https://sendpack.com.ar/calculadora",
        "failure": "https://sendpack.com.ar/calculadora",
        "pending": "https://sendpack.com.ar/calculadora"
    },
    "auto_return": "approved",
  // ...
    items: [
      {
        title:req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
        id: '1234',
        datosEnvio: {datosEnvio},
        tiempo: {tiempo},
        distancia: {disntacia},
        costoEstimado: {costoEstimado},
        tel: {tel}
      }
    ]
    
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  
    
    res.redirect(response.body.init_point);
   
  }).catch(function(error){
    console.log(error);
  });
});

var preference = {}
preference = {
  // ...
  
  items: [
    {
      id: '1234',
      datosEnvio: {datosEnvio},
      tiempo: {tiempo},
      distancia: {distancia},
      costoEstimado: {costoEstimado},
      tel: {tel}
    }
  ]// ...
}

// ...


app.listen(PORT, () => console.log(`Server runnig on port ${development.host}:${PORT}`))