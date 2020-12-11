import express from "express";
import signale from "signale";
import cors from "cors";
import { api as routes } from "./routes";
import dotenv from "dotenv";

const app = express();
dotenv.config();

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
