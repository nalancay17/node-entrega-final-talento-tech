import { generateToken } from "../utils/token-generator.js";

const default_user = {
    id: 1,
    email: "user@email.com",
    password: "password"
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = { id: 1, email };
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(user);
        return res.json({ token });
    } else {
        return res.status(401).json("Las credenciales ingresadas no son válidas");
    }
};