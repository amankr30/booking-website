import { Router } from 'express';
import { addCity, getCities } from '../controllers/city.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router
	.route('/')
	.get(getCities)
	.post(
		upload.fields([
			{ name: 'selectedImage', maxCount: 1 },
			{ name: 'normalImage', maxCount: 1 },
		]),
		addCity
	);

export default router;
