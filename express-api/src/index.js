import app from './app.js';
import log from 'npmlog';
import dotenv from 'dotenv';
import users from './routes/users.js';
import { connect } from './db/mongo.config.js';

dotenv.config();

const appPort = process.env.PORT || 3000;

app.use('/users', users);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  if (error instanceof Error) {
    const { name, message, stack } = error;
    return res.status(500).send({
      msg: 'An error was thrown',
      error: { name, message, stack },
    });
  }

  return res.status(500).send({
    msg: 'Something went wrong',
    error,
  });
});

app.listen(appPort, async () => {
  await connect(() => {
    log.info(`Express API running on ${appPort}`);
  });
});
