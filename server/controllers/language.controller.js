import catchAsync from '../utils/catchAsync.js';

import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { Language } from '../models/Language.model.js';

const addLanguage = catchAsync(async (req, res) => {
	const { name } = req.body;

	const existingLanguage = await Language.findOne({ name });

	if (existingLanguage) {
		throw new ApiError(409, 'Language already exists');
	}

	const newLanguage = new Language({ name });
	await newLanguage.save();
	return res.json(new ApiResponse(200, newLanguage));
});

const getLanguages = catchAsync(async (req, res) => {
	const langugaes = await Language.find({});
	return res.json(new ApiResponse(200, langugaes));
});

export { addLanguage, getLanguages };
