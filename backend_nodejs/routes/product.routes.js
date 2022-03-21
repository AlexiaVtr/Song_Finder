import {Router} from 'express';
import * as productCtrl from '../controllers/product.controller.js';
import cacheInit from '../middleware/cache.js';


const router = Router();


router.get('/search_tracks',
(req, res) => {
const name = req.query.name
productCtrl.newRequest(name)
    .then( (data) => {
        console.log(data)
        res.send(data)
    })
})


//router.post('/search_tracks',cacheInit, productCtrl.newRequest);
//router.get('/search_tracks', productCtrl.getStatus);




export default router;