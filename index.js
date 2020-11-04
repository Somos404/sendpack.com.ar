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

app.listen(PORT, () => console.log(`Server runnig on port ${development.host}:${PORT}`))