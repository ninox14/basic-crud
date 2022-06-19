import 'dotenv/config';
import { createServer } from 'http';
import { DEFAULT_PORT } from './constants.js';

const PORT = process.env.PORT || DEFAULT_PORT;
const server = createServer((req, res) => {
  console.log(req, res);
});

server.listen(PORT, () => {
  console.log('Hello World!', PORT);
});
