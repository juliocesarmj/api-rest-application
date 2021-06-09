const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

//habilita server para receber dados json
app.use(express.json())

// const allowedOrigins = ['http://127.0.0.1:5500'];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       let allowed = true;

//       // permite conexões sem origin. Exemplo: Mobile Apps
//       if (!origin) allowed = true;

//       // verifica se o origin da request consta na lista de autorizados no array allowedOrigins
//       if (!allowedOrigins.includes(origin)) allowed = false;

//       callback(null, allowed);
//     },
//   }),
// );
//publica até o momento
app.use(cors())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
