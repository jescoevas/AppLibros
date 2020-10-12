const { startServer } = require('./config/app')
const { startDatabaseConnection } = require('./config/database')

function main() {
    startDatabaseConnection()
    startServer()
}

main()