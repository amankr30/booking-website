import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema(
	{
		show: { type: Schema.Types.ObjectId, ref: 'Show' },
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		seatsBooked: {
			category: { type: String, required: true },
			count: { type: Number, required: true },
		},
	},
	{ timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);
