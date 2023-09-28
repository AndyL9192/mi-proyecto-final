// Se implementa el enrutador de Express

const { Router } = require('express');
const { crearPublicacion } = require('../controllers/blog.controllers');
const router = Router();


router.get('/', (req, res) => {
    res.render('home')
  })
  

router.post('/nueva-publicacion',crearPublicacion )
  
  module.exports = router;