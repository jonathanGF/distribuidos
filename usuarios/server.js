const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

let usuarios = [];  // Almacenará los usuarios

// Ruta para obtener los usuarios
app.get('/', (req, res) => {
    res.json(usuarios);  // Devuelve todos los usuarios
});

// Ruta para registrar un nuevo usuario
app.post('/', (req, res) => {
    const { usuario } = req.body;
    if (usuario) {
        usuarios.push(usuario);  // Agrega el nuevo usuario
        res.status(201).json({ message: 'Usuario registrado', usuario });
    } else {
        res.status(400).json({ message: 'No se proporcionó ningún usuario' });
    }
});

// Ruta para borrar todos los usuarios
app.delete('/', (req, res) => {
    usuarios = [];  // Vacía el arreglo de usuarios
    res.status(200).json({ message: 'Todos los usuarios han sido borrados' });
});

app.listen(port, () => {
    console.log(`Servidor de usuarios corriendo en http://localhost:${port}`);
});
