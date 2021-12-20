import mongoose from 'mongoose';

const tiposCultivosSchema = mongoose.Schema({
    tipoCultivo: String,
    finalidad: String,
    clasificacion: String,
});

export default mongoose.model('tiposdecultivos', tiposCultivosSchema);