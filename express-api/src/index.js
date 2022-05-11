import app from './app.js';
import log from 'npmlog';

const PORT = 3010;

app.listen(PORT, () => {
  log.info(`Express API running on ${PORT}`);
});
