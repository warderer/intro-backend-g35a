// #1 Importar Express
const express = require('express')

const PORT = process.env.PORT || 3000

// #2 Crear una instancia de Express
const app = express()

// #3 Configurar Express para que entienda JSON
app.use(express.json())

// #4 Definir rutas de la aplicación

// #5 Levantar/iniciar el servidor

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`)
})
