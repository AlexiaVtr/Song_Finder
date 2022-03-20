import {Router} from 'express';

const router = Router();

import * as productCtrl from '../controllers/product.controller';

router.post('/product/', productCtrl.newProduct);
router.get('/product/', productCtrl.getProductAll);


export default router;