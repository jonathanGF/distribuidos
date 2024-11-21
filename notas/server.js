const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

let notas = [];  // Almacenará las notas

// Ruta para obtener las notas
app.get('/', (req, res) => {
    res.json(notas);  // Devuelve todas las notas
});

// Ruta para agregar una nueva nota
app.post('/', (req, res) => {
    const { nota } = req.body;
    if (nota) {
        notas.push(nota);  // Agrega la nueva nota
        res.status(201).json({ message: 'Nota agregada', nota });
    } else {
        res.status(400).json({ message: 'No se proporcionó ninguna nota' });
    }
});

// Ruta para borrar todas las notas
app.delete('/', (req, res) => {
    notas = [];  // Vacía el arreglo de notas
    res.status(200).json({ message: 'Todas las notas han sido borradas' });
});

app.listen(port, () => {
    console.log(`Servidor de notas corriendo en http://localhost:${port}`);
});
