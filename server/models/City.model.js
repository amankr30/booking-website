import mongoose, { Schema } from 'mongoose';

const citySchema = new Schema({
	name: { type: String, required: true, trim: true },
	selectedImage: {
		public_id: { type: String, required: true },
		url: { type: String, required: true },
	},
	normalImage: {
		public_id: { type: String, required: true },
		url: { type: String, required: true },
	},
});

export const City = mongoose.model('City', citySchema);
