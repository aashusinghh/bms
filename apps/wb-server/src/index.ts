import "dotenv/config";

import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  //   console.log("Client connected")

  await client.user.create({
    data: {
      username: "test" + Math.floor(Math.random() * 1000),
      password: "test" + Math.floor(Math.random() * 1000),
    },
  });

  socket.send("Welcome to the WebSocket server!");
});
