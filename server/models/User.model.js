import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcryt from 'bcrypt';
import validator from 'validator';

const userSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			index: true,
			validate: [validator.isEmail, 'Please enter a valid email!'],
		},
		avatar: {
			public_id: String,
			url: String,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		refreshToken: { type: String },
		city: { type: Schema.Types.ObjectId, ref: 'City' },
		role: { type: String, enum: ['user', 'admin'], default: 'user' },
		bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
	},
	{ timestamps: true }
);

userSchema.pre('save', async function (next) {
	try {
		if (this.isModified('password')) {
			const salt = await bcryt.genSalt(10);
			const hashedPassword = await bcryt.hash(this.password, salt);
			this.password = hashedPassword;
		}
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcryt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
		}
	);
};
userSchema.methods.generateRefreshToken = function () {
	return jwt.sign(
		{
			_id: this._id,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
		}
	);
};

export const User = mongoose.model('User', userSchema);
