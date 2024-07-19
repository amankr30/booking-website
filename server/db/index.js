const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

mongoose.set('strictQuery', false);

const connectDB = async () => {
	const connectionInstance = await mongoose.connect(
		`${process.env.MONGODB_URI}/${DB_NAME}`
	);
	console.log('DB Connected! HOST: ' + connectionInstance.connection.host);
};

module.exports = { connectDB };
