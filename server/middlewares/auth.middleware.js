import { User } from '../models/User.model.js';
import { ApiError } from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import jwt from 'jsonwebtoken';

export const verifyJwt = catchAsync(async (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    throw new ApiError(401, 'No Token, Unauthorized request!');
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select(
      '-password -refreshToken',
    );

    if (!user) {
      throw new ApiError(401, 'Invalid request!');
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || 'Invalid request!');
  }
});
