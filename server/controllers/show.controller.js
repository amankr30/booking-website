import catchAsync from '../utils/catchAsync.js';

import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { Category } from '../models/Category.model.js';
import { City } from '../models/City.model.js';
import { Language } from '../models/Language.model.js';
import { Show } from '../models/Show.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const addShow = catchAsync(async (req, res) => {
	const { name, cityId, date, languageId, categoryId, seatCategories, venue } =
		req.body;

	const coverImage = req.file;

	if (!coverImage) {
		throw new ApiError(400, 'Cover Image is required');
	}

	if (typeof name !== 'string' || name.trim() === '') {
		throw new ApiError(400, 'Name must be a non-empty string');
	}

	if (typeof venue !== 'string' || venue.trim() === '') {
		throw new ApiError(400, 'Venue must be a non-empty string');
	}

	const formattedDate = new Date(date);

	if (isNaN(formattedDate.getTime())) {
		throw new ApiError(400, 'Date not valid');
	}

	const [city, category, language] = await Promise.all([
		City.findById(cityId),
		Category.findById(categoryId),
		Language.findById(languageId),
	]);

	if (!city) {
		throw new ApiError(400, 'City ID is invalid');
	}

	if (!category) {
		throw new ApiError(400, 'Category ID is invalid');
	}

	if (!language) {
		throw new ApiError(400, 'Language ID is invalid');
	}

	const uploadCategoryImage = await uploadOnCloudinary(coverImage.path, 'show');

	const newShow = await Show.create({
		name,
		venue,
		city: city._id,
		category: category._id,
		language: language._id,
		date: formattedDate,
		seatCategories,
		coverImage: {
			public_id: uploadCategoryImage.public_id,
			url: uploadCategoryImage.secure_url,
		},
	});

	if (!newShow) {
		throw new ApiError(500, 'Something went wrong while saving show');
	}
	return res.json(new ApiResponse(200, newShow, 'Show created'));
});

const getShows = catchAsync(async (req, res) => {
	const shows = await Show.find({}).populate('category');
	console.log(shows);

	return res.json(new ApiResponse(200, shows));
});

export { addShow, getShows };
