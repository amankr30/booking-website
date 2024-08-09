const errorHandler = (err, req, res, next) => {
	const { statusCode = 500 } = err;
	const message =
		err.message +
		(process.env.NODE_ENV === 'development' ? `\n${err.stack}` : '');

	return res.status(statusCode).json({
		message,
	});
};

export default errorHandler;
