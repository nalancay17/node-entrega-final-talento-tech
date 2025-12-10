import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.status(404).send("Rercurso no encontrado o ruta inválida");
});

const PORT = "3000";
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});