import { Router } from 'express';
import {
	addLanguage,
	getLanguages,
} from '../controllers/language.controller.js';

const router = Router();

router.route('/').get(getLanguages).post(addLanguage);

export default router;
