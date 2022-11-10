import routes from "./routes.js";

export function serveJson(req, res) {
  let key = req.method + req.url;
  let parts = key.split("/");

  if (parts.includes("GET") && parts.includes("users") && parts.length === 4) {
    key = "GET/api/users/id";
  }

  const router = routes[key];

  router ? router(req, res, parts) : res.end("NOT FOUND");
}
