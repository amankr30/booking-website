import express from 'express';
import cors from 'cors';
import { ApiError } from './utils/ApiError.js';
import errorHandler from './utils/errorHandler.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

import cityRouter from './routes/city.route.js';
import categoryRouter from './routes/category.route.js';
import languageRouter from './routes/language.route.js';
import userRouter from './routes/user.route.js';
import showRouter from './routes/show.route.js';

app.use('/api/v1/city', cityRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/language', languageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/show', showRouter);

app.use((req, res, next) => {
	next(new ApiError(404, 'Not Found'));
});

app.use(errorHandler);

export { app };
