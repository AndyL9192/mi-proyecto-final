// Se implementa el enrutador de Express

const { Router } = require('express');
const router = Router();


router.get('/home', (req, res) => {
    res.render('home')
  })
  

router.post('/nueva-publicacion', (req, res) => {
  // Recibir datos por body
    const { titulo, detalle } = req.body

    //se guardan los datos en una base de datos
    console.log(titulo, detalle)

    return res.send({ msg: "Publicacion guardada con éxito"})
  
    
  })
  
  module.exports = router;