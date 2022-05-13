import mongoose from 'mongoose';
import log from 'npmlog';

export const connect = async (cb) => {
  const { MONGO_CONNECTION_STRING } = process.env;

  mongoose.connect(MONGO_CONNECTION_STRING);

  mongoose.connection.once('open', () => {
    log.info('Connected to MongoDB');
    cb();
  });

  mongoose.connection.once('error', (error) => {
    log.error(`Error connecting => ${error}`);
  });
};

// TODO: not tested yet
export const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.connection.once('close', () => {
    log.info('Disconnected from MongoDB');
  });
};
