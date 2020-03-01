const app = require('./app')

const { createConnection } =  require('./db')

createConnection()

app.listen(4000, () => console.log('server on port 4000'))
