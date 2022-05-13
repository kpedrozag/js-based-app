import mongoose from 'mongoose';

// TODO: not tested yet
export default mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: {},
});
