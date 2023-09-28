// Importación de librerías
const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');
const path = require ('path');

// Coneccion a base de datos
const { sequalize } = require('./database')

sequalize.authenticate()
.then( () => console.log)("coneccion a Base de datos Exitosa")
.catch( err => console.log('Error al conectar BD; ', err))

require('ejs')
require('dotenv').config();



const app = express()

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

//archivos estaticos
app.use( express.static(path.join(__dirname, 'public')) )

// Motor de plantillas
app.set('view engine', 'ejs')

//Rutas
app.use(require('./routers/blog.routes'))

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))

