import express from 'express';

const app = express();

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

import cityRouter from './routes/city.route.js';

app.use('/api/v1/city', cityRouter);

export { app };
