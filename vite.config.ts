import { defineConfig } from "vite";
import { config } from "./app/config";

const HOST = config.server.host;
const PORT = config.server.port;

export default defineConfig({
  server: {
    host: HOST,
    port: PORT,
  },
});
