import path from "path";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { serveJson } from "./serveJson.js";
import { mimes } from "./mimes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function serveStatic(req, res) {
  let file = req.url;

  if (file === "/") file = "/index.html";

  const extension = String(path.extname(file)).toLowerCase();

  const type = mimes[extension] || "application/octet-stream";

  fs.readFile(__dirname + "/../client" + file, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        if (req.url.startsWith("/api")) {
          return serveJson(req, res);
        }
        fs.readFile(__dirname + "/../client/404.html", (error, content) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Error: ${error.code}`);
        res.end();
      }
    } else {
      res.writeHead(200, { "Content-Type": type });
      res.end(content, "utf8");
    }
  });
}
