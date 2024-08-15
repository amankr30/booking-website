import { Router } from 'express';

import { addShow, getShows } from '../controllers/show.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/').get(getShows).post(upload.single('coverImage'), addShow);

export default router;
