import mongoose from "mongoose";

const usuariosSchema = mongoose.Schema({
    nombres: { type: String, required:  true },
    apellidos: { type: String, required:  true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tipoUsuario: { type: String, default: "administrador" }
});

export default mongoose.model("usuarios", usuariosSchema);