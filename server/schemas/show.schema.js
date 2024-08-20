import Joi from 'joi';

const seatCategorySchema = Joi.object({
  name: Joi.string().trim().max(50).required().messages({
    'string.base': 'Seat category name should be a type of text',
    'string.empty': 'Seat category name cannot be empty',
    'string.max': 'Seat category name should not exceed 50 characters',
    'any.required': 'Seat category name is required',
  }),
  capacity: Joi.number().integer().min(1).required().messages({
    'number.base': 'Capacity should be a number',
    'number.integer': 'Capacity must be an integer',
    'number.min': 'Capacity must be at least 1',
    'any.required': 'Capacity is required',
  }),
  price: Joi.number().integer().required().messages({
    'number.base': 'Price should be a number',
    'number.integer': 'Price must be an integer',
    'any.required': 'Price is required',
  }),
});

export const showSchema = Joi.object({
  name: Joi.string().trim().max(100).required().messages({
    'string.base': 'Show name should be a type of text',
    'string.empty': 'Show name cannot be empty',
    'string.max': 'Show name should not exceed 100 characters',
    'any.required': 'Show name is required',
  }),
  cityId: Joi.string().hex().length(24).required().messages({
    'string.base': 'City ID should be a type of text',
    'string.hex': 'City ID must be a hexadecimal string',
    'string.length': 'City ID must be exactly 24 characters long',
    'any.required': 'City ID is required',
  }),
  date: Joi.date().greater('now').iso().required().messages({
    'date.base': 'Date should be a valid date',
    'date.greater': 'Date must be in the future',
    'date.iso': 'Date must be in ISO format',
    'any.required': 'Date is required',
  }),
  languageId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Language ID should be a type of text',
    'string.hex': 'Language ID must be a hexadecimal string',
    'string.length': 'Language ID must be exactly 24 characters long',
    'any.required': 'Language ID is required',
  }),
  categoryId: Joi.string().hex().length(24).required().messages({
    'string.base': 'Category ID should be a type of text',
    'string.hex': 'Category ID must be a hexadecimal string',
    'string.length': 'Category ID must be exactly 24 characters long',
    'any.required': 'Category ID is required',
  }),
  seatCategories: Joi.array().items(seatCategorySchema).required().messages({
    'array.base': 'Seat categories should be an array',
    'array.includes': 'Seat categories must follow the specified schema',
    'any.required': 'Seat categories are required',
  }),
  venue: Joi.string().trim().max(150).required().messages({
    'string.base': 'Venue should be a type of text',
    'string.empty': 'Venue cannot be empty',
    'string.max': 'Venue should not exceed 150 characters',
    'any.required': 'Venue is required',
  }),
  performer: Joi.string().trim().max(100).optional().messages({
    'string.base': 'Performer should be a type of text',
    'string.max': 'Performer should not exceed 100 characters',
  }),
});
