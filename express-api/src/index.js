import app from './app.js';
import log from 'npmlog';
import dotenv from 'dotenv';
dotenv.config();

const appPort = process.env.PORT || 3000;

app.listen(appPort, () => {
  log.info(`Express API running on ${appPort}`);
});
