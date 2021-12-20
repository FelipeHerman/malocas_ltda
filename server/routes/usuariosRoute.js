import express from "express";

import { getUsuarios, createUsuarios } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', getUsuarios); /* Obtiene todos los usuarios */
router.post('/', createUsuarios); /* Crea un tipo de usuarios */

export default router;