import http from 'http';
import { router } from "./router.js";

const port = process.env.PORT || 3000;

const server = http.createServer(router);

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + 'press Ctrl-C to terminate....'
  )
);
