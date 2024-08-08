import catchAsync from '../utils/catchAsync.js';
import { City } from '../models/City.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const addCity = catchAsync(async (req, res) => {
	const { name } = req.body;
	const { selectedImage, normalImage } = req.files;

	const existingCity = await City.findOne({ name });

	if (existingCity) {
		throw new ApiError(409, 'City already exists');
	}

	const uploadSelectedImage = await uploadOnCloudinary(
		selectedImage[0].path,
		'city'
	);
	const uploadNormalImage = await uploadOnCloudinary(
		normalImage[0].path,
		'city'
	);

	const newCity = new City({
		name,
		selectedImage: {
			public_id: uploadSelectedImage.public_id,
			url: uploadSelectedImage.secure_url,
		},
		normalImage: {
			public_id: uploadNormalImage.public_id,
			url: uploadNormalImage.secure_url,
		},
	});
	await newCity.save();
	return res.json(new ApiResponse(200, newCity));
});

const getCities = catchAsync(async (req, res) => {
	const cities = await City.find({});
	return res.json(new ApiResponse(200, cities));
});

export { addCity, getCities };
