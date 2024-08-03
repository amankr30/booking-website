import catchAsync from '../utils/catchAsync.js';
import { City } from '../models/City.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

const addCity = catchAsync(async (req, res) => {
	const { name } = req.body;

	const existingCity = await City.findOne({ name });

	if (existingCity) {
		return res.json(new ApiError(409, 'City already exists'));
	}

	const newCity = new City({ name });
	await newCity.save();
	return res.json(new ApiResponse(200, newCity));
});

const getCities = catchAsync(async (req, res) => {
	const cities = await City.find({});
	return res.json(new ApiResponse(200, cities));
});

export { addCity, getCities };
