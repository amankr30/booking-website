import catchAsync from '../utils/catchAsync.js';

import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { Category } from '../models/Category.model.js';

const addCategory = catchAsync(async (req, res) => {
	const { name } = req.body;

	const existingCategory = await Category.findOne({ name });

	if (existingCategory) {
		throw new ApiError(409, 'Category already exists');
	}

	const newCategory = new Category({ name });
	await newCategory.save();
	return res.json(new ApiResponse(200, newCategory));
});

const getCategories = catchAsync(async (req, res) => {
	const categories = await Category.find({});
	return res.json(new ApiResponse(200, categories));
});

export { addCategory, getCategories };
