import express from 'express';
import cors from 'cors';

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

import cityRouter from './routes/city.route.js';
import categoryRouter from './routes/category.route.js';

app.use('/api/v1/city', cityRouter);
app.use('/api/v1/category', categoryRouter);

export { app };
