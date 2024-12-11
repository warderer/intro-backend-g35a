/* MODELO */
// El modelo trae los datos de la base de datos.
// NO se encarga de valdiar datos ni resolver promesas (eso lo hace el Controlador en la arquitectura MVC).

// #1 Importar Knex: Traer la conexión a base de datos adecuada.
const knex = require('../config')

// #2 Crear funciones que me permitan interactuar con la base de datos.
// CRUD: Create, Read, Update, Delete

// Create: Crear un nuevo registro en la base de datos, en este caso de homes.
const create = (bodyHome) => {
  return knex
    .insert(bodyHome)
    .into('homes')
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'active', 'created_at', 'fk_user']) // Devuelve los campos que se insertaron.
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

module.exports = {
  create,
  findAll
}
