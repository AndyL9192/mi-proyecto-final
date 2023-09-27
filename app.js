const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');



const app = express()

const port = 3000

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))

