import { Router } from 'express';
import { addCity, getCities } from '../controllers/city.controller.js';

const router = Router();

router.route('/').get(getCities).post(addCity);

export default router;
