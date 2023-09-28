const ctrl = {}
const Publicaciones = require ('../models/Publicaciones')


ctrl.crearPublicacion = async (req, res) => {
    
// se crea una nueva publicacion
   const publicacion = await Publicaciones.creare(req.body);

   res.send({
    msg: "Publicacion creada con éxito",
    publicacion
   })
},


ctrl.obtenerPublicacion = async (req, res) => {
    const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
    }

ctrl.actualizarPublicacion = async (req, res) => {
    const { id } = req.params;

    const publicacion = await Publicaciones.findByPk(id)
    publicacion.set(req.body)
    await publicacion.save()
    res.json({
      msg: "Publicacion actualizada con éxito"
    })
    }

ctrl.eliminarPublicacion = async (req, res) => {
    
    }


    module.exports = ctrl;