import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
	{
		fullName: {},
		avatar: {},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		city: {},
		role: {},
		bookings: {},
		shows: {},
	},
	{ timestamps: true }
);
