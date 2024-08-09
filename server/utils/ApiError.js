class ApiError extends Error {
	constructor(statusCode, message = 'Something went wrong', stack = null) {
		super(message);
		this.statusCode = statusCode;

		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export { ApiError };
