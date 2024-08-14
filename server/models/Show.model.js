import mongoose, { Schema } from 'mongoose';

const showSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		coverImage: {
			public_id: { type: String, required: true },
			url: { type: String, required: true },
		},
		city: { type: Schema.Types.ObjectId, ref: 'City' },
		date: { type: Date, required: true },
		language: { type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		seat: [
			{ category: String, capacity: Number, price: Number, seatsLeft: Number },
		],
	},
	{ timestamps: true }
);

showSchema.index({ city: 1, category: 1 });

export const Show = mongoose.model('Show', showSchema);
