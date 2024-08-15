import { Router } from 'express';

import { addShow } from '../controllers/show.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/').post(upload.single('coverImage'), addShow);

export default router;
