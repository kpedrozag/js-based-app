import express from 'express';
import validator from '../models/payloads/validator.js';
import { getUsersSchema, getUserByIDSchema } from '../models/payloads/users.js';
import * as usersController from '../controllers/users.js';

const router = express.Router();

router.get('/', validator(getUsersSchema, 'query'), usersController.get);
router.get('/:id', validator(getUserByIDSchema, 'params'), usersController.getByID);
// TODO: not implemented yet
router.post('/', usersController.create);
router.delete('/', usersController.remove);

export default router;
