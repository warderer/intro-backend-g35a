/* CONTROLADORES */
// Los controladores tienen la lógica de negocios de la aplicación.
// Se encargar de recibir las peticiones HTTP, procesarlas y enviar una respuesta adecuada.
// También pueden validar los datos que se envian, manejar errores y resolver promesas.

// #1 Importar el modelo, en este caso Home.js
const ModelHome = require('../models/Home')

// #2 Crear funciones que se van a ejecutar cuando se haga una petición HTTP y que serán llamadas a través de las rutas (vistas)

// CREATE
const createHome = (req, res) => {
  ModelHome.create(req.body).then(home => {
    res.status(201).json(home)
  }).catch(error => {
    res.status(400).json({ error: error.message })
  })
}

// READ
const findAllHomes = (req, res) => {
  ModelHome.findAll().then(homes => {
    res.status(200).json(homes)
  }).catch(error => {
    res.status(400).json({ error: error.message })
  })
}

// UPDATE

// DELETE

module.exports = {
  createHome,
  findAllHomes
}
