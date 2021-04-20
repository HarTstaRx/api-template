import * as express from 'express';
import * as cors from 'cors';
import { json, urlencoded } from 'body-parser';

import itemRouter from './resources/item/item.router';

export const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/item', itemRouter);

export const start = (): void => {
  const port = process.env.API_LISTENER_PORT;
  if (typeof port === 'undefined') {
    const env = `port: ${port ?? ''};`;
    throw Error(`There are environment variables not defined (${env})`);
  }
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};
