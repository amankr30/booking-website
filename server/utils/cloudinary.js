import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, uploadType) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    let response;
    if (uploadType == 'show') {
      response = await uploadShowImage(localFilePath);
    } else if (uploadType == 'profile') {
      response = await uploadProfileImage(localFilePath);
    } else if (uploadType == 'city') {
      response = await uploadCityImage(localFilePath);
    }
    return response;
  } catch (error) {
    console.log('Upload failed', error);
    return null;
  } finally {
    // Removes the file
    fs.unlinkSync(localFilePath);
  }
};

const uploadShowImage = async (localFilePath) => {
  return await cloudinary.uploader.upload(localFilePath, {
    folder: 'booking-website/show-image',
    resource_type: 'image',
    transformation: [{ width: 400, height: 660, crop: 'limit' }],
    allowed_formats: ['jpg', 'png', 'jpeg', 'avif', 'svg', 'webp'],
  });
};

const uploadProfileImage = async (localFilePath) => {
  return await cloudinary.uploader.upload(localFilePath, {
    folder: 'booking-website/profile-image',
    resource_type: 'image',
    transformation: [{ width: 1080, height: 1080, crop: 'limit' }],
    allowed_formats: ['jpg', 'png', 'jpeg', 'avif', 'svg', 'webp'],
  });
};

const uploadCityImage = async (localFilePath) => {
  return await cloudinary.uploader.upload(localFilePath, {
    folder: 'booking-website/city-image',
    resource_type: 'image',
    transformation: [{ width: 80, height: 80, crop: 'limit' }],
    allowed_formats: ['jpg', 'png', 'jpeg', 'avif', 'svg', 'webp'],
  });
};

export { uploadOnCloudinary };
