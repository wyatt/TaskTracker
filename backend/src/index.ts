import "dotenv/config";

import express from "express";
import signale from "signale";
import cors from "cors";

import { api as routes } from "./routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

app.use(routes);

app.listen(8888, () => {
  signale.success(`[WEB] Launched on port ${process.env.PORT || 8888}`);
});
