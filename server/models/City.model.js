import mongoose, { Schema } from 'mongoose';

const citySchema = new Schema({
	name: { type: String, required: true },
});

export const City = mongoose.model('City', citySchema);
