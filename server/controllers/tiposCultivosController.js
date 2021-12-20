import express from 'express';
import mongoose from 'mongoose';

import TiposCultivo from '../models/tiposCultivoModel.js';

const router = express.Router();

export const getTiposCultivo = async (req, res) => { 
    try {
        const tiposCultivo = await TiposCultivo.find();
        res.status(200).json(tiposCultivo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTiposCultivo = async (req, res) => {
    const cultivos = req.body;

    const newTiposCultivo = new TiposCultivo({ ...cultivos, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newTiposCultivo.save();

        res.status(201).json(newTiposCultivo );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteTiposCultivo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No hay tipo de cultivo con id: ${id}`);

    await TiposCultivo.findByIdAndRemove(id);

    res.json({ message: "Tipo de Cultivo eliminado correctamente." });
}

export default router;