import { Router } from 'express';

import {
  addShow,
  deleteShow,
  getShows,
} from '../controllers/show.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import validateSchema from '../utils/validateSchema.js';
import { showSchema } from '../schemas/show.schema.js';

const router = Router();

router
  .route('/')
  .get(getShows)
  .post(upload.single('coverImage'), validateSchema(showSchema), addShow);

router.route('/:showId').delete(deleteShow);

export default router;
