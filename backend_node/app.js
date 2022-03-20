import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routesProduct from './routes/product.routes'
import pkg from '../package.json'


const app = express()


import './database'


app.set('pkg', pkg);
app.set('PORT', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.json({
        'Name':app.get('pkg').name,
        'Description': app.get('pkg').description,
        "Version" : app.get('pkg').version,
        "Author" : app.get('pkg').author
})
});


app.use(routesProduct);

export default app;