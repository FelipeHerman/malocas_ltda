import express from "express";

import { getTiposCultivo, createTiposCultivo, deleteTiposCultivo } from '../controllers/tiposCultivosController.js';

const router = express.Router();

router.get('/', getTiposCultivo); /* Obtiene todos los cultivos */
router.post('/', createTiposCultivo); /* Crea un tipo de cultivo */
router.get('/delete/:id', deleteTiposCultivo); /* Elimina un tipo de cultivo */

export default router;