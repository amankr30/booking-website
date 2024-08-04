import { Router } from 'express';
import {
	addCategory,
	getCategories,
} from '../controllers/category.controller.js';

const router = Router();

router.route('/').get(getCategories).post(addCategory);

export default router;
