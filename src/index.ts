// https://www.npmjs.com/package/dotenv

import { createServer, IncomingMessage, ServerResponse } from 'http';

require('dotenv').config();

const moduleFunction = async (runSuccessfully: boolean) => {
  if (runSuccessfully) {
    return 'yo';
  }
  throw new Error('whoops');
};

(async () => {
  createServer(async (_req: IncomingMessage, res: ServerResponse) => {
    try {
      const response = await moduleFunction(false);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(response);
      res.end();
    } catch (e: unknown) {
      res.statusCode = 400;
      res.end('{"statusCode": 400, "error": "Bad Request", "message": "This is the message"}');
    }
  }).listen(8080);
})().catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
