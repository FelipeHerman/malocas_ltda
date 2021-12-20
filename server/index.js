import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

/* Rutas */
import usuariosRoutes from './routes/usuariosRoute.js';
import tiposCultivosRoutes from './routes/tiposCultivoRoute.js';
/* End Rutas */

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

/* Define the routes */
app.use('/usuarios', usuariosRoutes)
app.use('/cultivos', tiposCultivosRoutes)
/* End Define the routes */

const username = 'proyectos';
const password = '12345proyectos';
const db_name = 'malocas_ltda';

const CONNECTION_URL = `mongodb+srv://${username}:${password}@clusterproyectos.5vp3z.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Servidor corriendo en Puerto: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} no se conectó`));