// Para definir RUTAS en un archivo separado, usando Express, se debe configurar un router.

// #1 Llamar al a biblioteca de express (importarla)
const express = require('express')

// #2 Mando a llamar al Router de express
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}
    // Traer toda la lista de mascotas
    router.get('/api/v1/pets', (req, res) => {
        res.json(petList)
    })

    /* PARAMS */
    // Un param sirve para hacer una ruta dinámica. Por ejemplo, si queremos traer una mascota en específico.
    // Params: /api/v1/pets/:petId  ->   /api/v1/pets/1
    router.get('/api/v1/pets/:petId', (req, res) => {
        console.log(req.params)
        const petId = req.params.petId
        const pet = petList.pets.find(pet => pet.id === parseInt(petId))
        if (!pet) {
            return res.status(404).json({ message: 'Pet not found' })
        }
        res.json(pet)
    })

module.exports = router