import * as usersLib from '../libs/users.js';

export const get = async (req, res, next) => {
  const { limit = 10, skip = 0, ...filters } = req.query;

  try {
    const data = await usersLib.getUsers(filters, { limit, skip });
    return res.send(data);
  } catch (error) {
    return next(error);
  }
};

export const getByID = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await usersLib.getUsers({ ID: id });
    const user = data[0] || {};
    return res.send(user);
  } catch (error) {
    return next(error);
  }
};

// TODO: create validator
// TODO: not tested yet
export const create = async (req, res, next) => {
  try {
    const data = await usersLib.createUser(req.body);
    return res.send(data);
  } catch (error) {
    return next(error);
  }
};

// TODO: this block is dummy. define actual logic
export const remove = async (req, res, next) => {
  const totalInout = Object.assign({}, req.query, req.params);

  if (Object.keys(totalInout).length === 0) {
    return next({ status: 'fail' });
  }
  return res.send({
    status: 'ok',
    method: 'delete',
    totalInout,
  });
};
