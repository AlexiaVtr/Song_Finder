import {Router} from 'express';

const router = Router();


import * as productCtrl from '../controllers/product.controller.js';

router.post('/search_tracks', productCtrl.newRequest);
router.get('/search_tracks', productCtrl.getStatus);

//app.get('/transaction', (req,res) => {
//    res.send('Estoy funcionando!')
//});

//app.post('/search_tracks', (req,res) => {
//    res.send('yea')
//    console.log(req.body)
//});


export default router;