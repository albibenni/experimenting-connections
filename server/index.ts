import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080, path: "/benni-socket" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.send(`Got the message: ${message}`);
  });
});
