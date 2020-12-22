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
    access_token: 'APP_USR-4835103058943058-122219-2e569ce09a9604a62af02296652b8f72-264859686'
  });

//routes
app.post('/checkout', (req, res) => {
// Crea un objeto de preferencia

let preference = {

  // ...
    items: [
      {
        title:req.body.title,
        unit_price: parseInt(req.body.price)
<<<<<<< HEAD
=======
       
>>>>>>> a0f0ce66314af08561dd208b4bbf05c18648d0cf
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

<<<<<<< HEAD
// ...
=======
>>>>>>> a0f0ce66314af08561dd208b4bbf05c18648d0cf


app.listen(PORT, () => console.log(`Server runnig on port ${development.host}:${PORT}`))