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

const routes = {
  
  "GET/api/users": (req, res, parts) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(db.data));
  },
  
  "GET/api/users/id": (req, res, parts) => {
    const id = parts.at(-1);
    const user = db.data.find((user) => user.id === Number(id));
    if (user) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
      return;
    }
    res.end("Not Found");
  },
};

export default routes;