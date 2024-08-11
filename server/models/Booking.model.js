import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema(
	{
		language: { type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		seat: [
			{ category: String, capacity: Number, price: Number, seatsLeft: Number },
		],
	},
	{ timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);
