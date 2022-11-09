import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "data/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file,
await db.read();

export function serveJson(path, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(db.data));
}
