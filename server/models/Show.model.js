import mongoose, { Schema } from 'mongoose';

const showSchema = new Schema({
	name: { type: String, required: true },
	images: { type: String },
	organizer: { type: Schema.Types.ObjectId, ref: 'User' },
	city: {type: Schema.Types.ObjectId, ref: 'City'},
	price: {type: Number, required: true},
	date: {type: Date, required: true},
	artist: {},
	language: {type: String, required: true},
	categories: {},
});
