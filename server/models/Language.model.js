import mongoose, { Schema } from 'mongoose';

const languageSchema = new Schema({
	name: { type: String, required: true, trim: true, unique: true },
	code: { type: String, required: true },
});

export const Category = mongoose.model('Category', categorySchema);
