import routesProduct from '../backend_nodejs/routes/product.routes.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import {fileURLToPath} from 'url';
import cacheInit from './middleware/cache.js';
import history from 'connect-history-api-fallback';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


// Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json({ type: "*/*" }));
app.use(cors());
app.use(cacheInit);
app.use(routesProduct);

// M. VueJS

app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


export default app;