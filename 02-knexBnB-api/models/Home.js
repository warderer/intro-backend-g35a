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

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // ¿Que datos voy a actualizar?
    .from('homes') // ¿De que tabla?
    .where('house_id', houseId) // ¿A quién?
    .returning('*') // ¿Qué quiero que me devuelva?
}

// El Softdelete, no borra realmente de la base de datos, solo cambia el estado de un registro a inactivo. (active: false)
const softDelete = (houseId) => {
  return knex
    .update({ active: false }) // ¿Que datos voy a actualizar?
    .from('homes') // ¿De que tabla?
    .where('house_id', houseId) // ¿A quién?
}

// Borrar un registro de la base de datos
const destroy = (houseId) => {
  return knex
    .delete()
    .from('homes')
    .where('house_id', houseId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  softDelete,
  destroy
}
