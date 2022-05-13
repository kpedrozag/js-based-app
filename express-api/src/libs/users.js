import usersModel from '../models/mongo/users.js';

export const getUsers = async (filters = {}, { limit = 10, skip = 0 }) => {
  return usersModel.find(filters, {}, { limit, skip });
};

// TODO: not tested
export const createUser = async (user) => {
  return usersModel.create(user);
};
