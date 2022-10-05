import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'data/db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file,
await db.read();

export function serveJson(res, path, contentType, responseCode = 200) {
  res.writeHead(responseCode, { 'Content-Type': contentType });
  res.end(JSON.stringify(db.data));
}
