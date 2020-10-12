const express = require('express')
const cors = require('cors')
const userRoutes = require('../routes/user.routes')

const app = express()

//Settings
app.set('port', process.env.PORT || 4200)

//Middlewares
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

//Routes
app.use(userRoutes)

//Starting
function startServer() {
    app.listen(app.get('port'), () => console.log(`Servidor activo en puerto ${app.get('port')}`))
}

module.exports = {
    startServer
}