// #1 Llamar al a biblioteca de express (importarla)
const express = require('express')

const petRoutes = require('./api/v1/pets')

// #2 Crear una instancia de express (normalmente la llamamos app)
const app = express()

// #3 Opcional: definir un puerto
const port = process.env.PORT || 3000

// #4 Configurar express para indicarle que se use JSON
app.use(express.json())

// #5 Definir rutas del servidor
app.get('/', (req, res) => {
  res.send('Hola DevF G35A')
})

app.use(petRoutes)

// #6 Levantar el servidor (iniciarlo)
app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`)
})

// Para ejecutar el servidor correr el comando:
// node index.js