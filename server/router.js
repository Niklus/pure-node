import { serveJson } from "./serveJson.js";
import { serveStatic } from "./serveStatic.js";

export function router (req, res) {
  // normalize url
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serveStatic(res, '/home.html', 'text/html');
      break;
    case '/about':
      serveStatic(res, '/about.html', 'text/html');
      break;
    case '/img/logo.png':
      serveStatic(res, '/img/logo.png', 'image/png');
      break;
    case '/css/styles.css':
      serveStatic(res, '/css/styles.css', 'text/css');
      break;
    case '/api':
      serveJson(res, '/api', 'application/json');
      break;
    default:
      serveStatic(res, '/404.html', 'text/html', 404);
      break;
  }
}