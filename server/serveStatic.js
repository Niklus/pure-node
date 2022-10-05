import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function serveStatic(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + "/../client" + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 - Internal Error');
    }
    res.writeHead(responseCode, { 'Content-Type': contentType });
    res.end(data);
  });
}