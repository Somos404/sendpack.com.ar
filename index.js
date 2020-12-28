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
    access_token: 'APP_USR-691514658172465-121420-3381bc2ac8eae8433384760b0a1b9842-686357667'
  });

//routes
app.post('/checkout', (req, res) => {
// Crea un objeto de preferencia

let preference = {

  // ...
    items: [
      {
        title:req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
  
    
      }
    ],
    "back_urls": {
      "success": "https://sendpack.com.ar/calculadora",
      "failure": "https://sendpack.com.ar/fail",
      "pending": "https://sendpack.com.ar/pendiente"
  },
  "auto_return": "approved",
    
  }
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  
    
    res.redirect(response.body.init_point);
   
  }).catch(function(error){
    console.log(error);
  });
});



app.listen(PORT, () => console.log(`Server runnig on port ${development.host}:${PORT}`))