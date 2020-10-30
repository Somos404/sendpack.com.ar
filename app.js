const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');

require('./db')

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


const apiRouter = require('./routes/api')
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

//Route basic
app.use('/api', apiRouter)

// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app