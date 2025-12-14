import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authentication } from "./src/middlewares/authentication.js";
import authRouter from "./src/routes/auth.routes.js";
import productsRouter from "./src/routes/products.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido a la API REST de productos con Node.js"});
});

app.use("/auth", authRouter);
app.use("/api/products", authentication, productsRouter);

app.use((req, res, next) => {
    res.status(404).send("Rercurso no encontrado o ruta inválida");
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});