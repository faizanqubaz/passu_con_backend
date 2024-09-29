import express from 'express';

import { ibexRoute } from './modules/ibexs/ibex.route';
import {adminRoute} from './modules/admin/admin.route'
const router = express.Router();

router.use('/ibex', ibexRoute);
router.use('/login',adminRoute)


export { router as mainRouter };
