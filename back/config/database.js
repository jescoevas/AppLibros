const mongoose = require('mongoose')

async function startDatabaseConnection() {
    await mongoose.connect('mongodb://localhost:27017/appbooks', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    console.log('Conectado a MongoDB');
}

module.exports = {
    startDatabaseConnection
}