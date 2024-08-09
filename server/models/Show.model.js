import mongoose, { Schema } from 'mongoose';

const showSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		coverImage: {
			public_id: { type: String, required: true },
			url: { type: String, required: true },
		},
		city: { type: Schema.Types.ObjectId, ref: 'City' },
		price: { type: Number, required: true },
		date: { type: Date, required: true },
		language: { type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		totalSeats: { type: Number, required: true },
		seatsBooked: { type: Number, required: true, default: 0 },
	},
	{ timestamps: true }
);

export const Show = mongoose.model('Show', showSchema);
