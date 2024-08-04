import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
	path: './env',
});

app.get('/', (req, res) => {
	res.send('Hello');
});

connectDB()
	.then(() => {
		const port = process.env.PORT || 8000;

		app.on('error', (error) => {
			console.log('Error: ' + error);
			throw error;
		});

		app.listen(port, () => {
			console.log('Server is running at Port: ' + port);
		});
	})
	.catch((error) => {
		console.log('Connection Failed', error);
	});
