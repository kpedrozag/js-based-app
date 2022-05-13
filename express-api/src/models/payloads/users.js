import Joi from 'joi';

export const getUsersSchema = Joi.object({
  limit: Joi.number().integer().positive(),
  skip: Joi.number().integer().positive(),
});

export const getUserByIDSchema = Joi.object({
  id: Joi.number().integer().positive(),
});
