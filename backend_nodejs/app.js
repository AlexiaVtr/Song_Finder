import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routesProduct from '../backend_nodejs/routes/product.routes.js';

const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(express.urlencoded({extended: true}));
app.use(express.json({
    type: "*/*"
}));

app.use(cors());

app.use(routesProduct);

export default app;