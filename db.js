const Sequelize = require('sequelize')
const { development } = require('./config/config.json')

//models
const UsersModel = require('./models/users')

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    port: 3306,
    dialect: 'mysql'
});

const User = UsersModel(sequelize, Sequelize)
const initial_address = UsersModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla users sync');
    })

module.exports = {
    User, initial_address
}