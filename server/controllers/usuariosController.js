import express from 'express';
import mongoose from 'mongoose';

import Usuarios from '../models/usuariosModel.js';

const router = express.Router();

export const getUsuarios = async (req, res) => { 
    try {
        const usuarios = await Usuarios.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUsuarios = async (req, res) => {
    const usuarios = req.body;

    const newUsuarios = new Usuarios({ ...usuarios, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newUsuarios.save();

        res.status(201).json(newUsuarios );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUsuarios = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No hay usuarios con id: ${id}`);

    await Usuarios.findByIdAndRemove(id);

    res.json({ message: "Usuario eliminado correctamente." });
}

export default router;