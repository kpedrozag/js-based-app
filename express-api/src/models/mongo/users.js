import mongoose from 'mongoose';
import rolesSchema from './roles.js';

const userSchema = mongoose.Schema({
  ID: {
    type: Number,
    min: 0,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  roles: [rolesSchema],
});

export default mongoose.model('user', userSchema);
