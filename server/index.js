import http from "http";
import { serveStatic } from "./serveStatic.js";

const port = process.env.PORT || 3000;

const server = http.createServer(serveStatic);

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + "press Ctrl-C to terminate...."
  )
);