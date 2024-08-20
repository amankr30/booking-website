import catchAsync from '../utils/catchAsync.js';

import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { Category } from '../models/Category.model.js';
import { City } from '../models/City.model.js';
import { Language } from '../models/Language.model.js';
import { Show } from '../models/Show.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { v2 as cloudinary } from 'cloudinary';

const addShow = catchAsync(async (req, res) => {
  const {
    name,
    cityId,
    date,
    languageId,
    categoryId,
    seatCategories,
    venue,
    performer,
  } = req.body;

  const coverImage = req.file;

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
    performer,
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
  return res.status(201).json(new ApiResponse(201, newShow, 'Show created'));
});

const deleteShow = catchAsync(async (req, res) => {
  const { showId } = req.params;
  const show = await Show.findById(showId);
  if (!show) {
    throw new ApiError(401, 'Invalid show id');
  }

  await cloudinary.uploader.destroy(show.coverImage.public_id);

  await Show.findByIdAndDelete(showId);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, 'Show deleted successfully'));
});

const getShows = catchAsync(async (req, res) => {
  const shows = await Show.find({}).populate('category');
  console.log(shows);

  return res.status(200).json(new ApiResponse(200, shows));
});

export { addShow, deleteShow, getShows };
