const express = require('express')

const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()

db.connect()

const port = process.env.PORT || 8080

//habilita server para receber dados json
app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
