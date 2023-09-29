const ctrl = {}
const Publicaciones = require ('../models/Publicaciones')


ctrl.crearPublicacion = async (req, res) => {
    try {
      // se crea una nueva publicacion
   const publicacion = await Publicaciones.creare(req.body);

   res.send({
    msg: "Publicacion creada con éxito",
    publicacion

   })
    } catch(error) {
      console.log(error)
      return res.status(500),json({
        msg: "Error al crear nueva publicacion"

      })
    }

},


ctrl.obtenerPublicacion = async (req, res) => {
    try{
      const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
    } catch(error) {
      console.log(error)
      return res.status(500),json({
        msg: "Error al obtener nueva publicacion"

      })
    }
    }



ctrl.actualizarPublicacion = async (req, res) => {
    try{
      const { id } = req.params;

    const publicacion = await Publicaciones.findByPk(id)
    publicacion.set(req.body)
    await publicacion.save()
    res.json({
      msg: "Publicacion actualizada con éxito"
    })
    }catch(error) {
      console.log(error)
      return res.status(500),json({
        msg: "Error al actualizar publicacion"

      })
    }
  }

ctrl.eliminarPublicacion = async (req, res) => {
  try{
    const { id } = req.params;
  await Publicaciones.destroy({
    where: {
      id
    }
  });

  res.json({
    msg: "Publicacion eliminada con éxito"
  })
  } catch(error) {
    console.log(error)
    return res.status(500),json({
      msg: "Error al eliminar publicacion"

    })
  
    }
  }


    module.exports = ctrl;