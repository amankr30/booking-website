import mongoose, { Schema } from 'mongoose';

const seatCategoriesSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  seatsLeft: { type: Number },
});

const showSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    coverImage: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: 'City',
      required: true,
    },
    date: { type: Date, required: true },
    language: {
      type: Schema.Types.ObjectId,
      ref: 'Language',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    performer: String,
    venue: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    seatCategories: [seatCategoriesSchema],
  },
  { timestamps: true },
);

showSchema.pre('save', function (next) {
  this.seatCategories.forEach((seatCategory) => {
    seatCategory.seatsLeft = seatCategory.capacity;
  });
  next();
});

showSchema.index({ city: 1, category: 1 });

export const Show = mongoose.model('Show', showSchema);
