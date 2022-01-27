import express from "express";

import { getUsuarios, createUsuarios, deleteUsuarios } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', getUsuarios); /* Obtiene todos los usuarios */
router.post('/', createUsuarios); /* Crea un tipo de usuarios */
router.get('/delete/:id', deleteUsuarios); /* Elimina un usuario */

export default router;