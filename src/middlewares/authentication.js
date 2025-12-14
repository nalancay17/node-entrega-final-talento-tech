import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1] ?? null;
    if (!token)
        return res.status(401).json("Se debe enviar el token en los headers");
    jwt.verify(token, secret_key, (err) => {
        if (err)
            return res.status(403).json("El token es inválido");
        next();
    });
};