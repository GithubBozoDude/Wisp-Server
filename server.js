import http from "http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("wisp server");
});

httpServer.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Wisp server running on port ${PORT}`);
});
