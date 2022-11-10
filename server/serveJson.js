import routes from "./routes.js";

export function serveJson(req, res) {
  let key = req.method + req.url;
  let parts = key.split("/");

  if (parts.includes("GET") && parts.includes("user")) {
    key = "GET/api/user";
  }

  const router = routes[key];

  router ? router(req, res, parts) : res.end("NOT FOUND");
}
