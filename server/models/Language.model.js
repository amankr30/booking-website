import mongoose, { Schema } from 'mongoose';

const languageSchema = new Schema({
	name: { type: String, required: true, trim: true, unique: true },
});

export const Language = mongoose.model('Language', languageSchema);
