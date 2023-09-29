// Se implementa el enrutador de Express

const { Router } = require('express');
const router = Router();
const { crearPublicacion, actualizarPublicacion,eliminarPublicacion,obtenerPublicacion } = require('../controllers/blog.controllers');

///  ==============================
/// rutas para las vistas
/// ================================

router.get('/', (req, res) => {
    res.render('home')
  })
  // rutas para la vista
  router.get('admin',(req, res => {
    res.render('admin')
  }))


///  ==============================
/// CRUD de publicaciones
/// ================================
// crear nueva publicacion
router.post('/publicacion',crearPublicacion )

//obtener todas las publicaciones
router.get('/publicaciones', obtenerPublicacion)

//actualizar las publicacion
router.put('/publicacion/:id', actualizarPublicacion)


//eliminar publicacion
 router.delete('publicaion/id', eliminarPublicacion) 


  module.exports = router;