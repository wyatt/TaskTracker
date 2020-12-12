import { getHomework } from "./methods/homework";
import { getRescueTime } from "./methods/rescuetime";
import { Router } from "express";
import { env } from "./env";

export const api = Router();

const homeworkOptions = [
  env.EDULINK_USERNAME,
  env.EDULINK_PASSWORD,
  env.EDULINK_DOMAIN,
  env.ESTABLISHMENT_ID,
] as const;

api.get("/homework", async (req, res) => {
  res.json(await getHomework(...homeworkOptions));
});

api.get("/rescuetime", async (req, res) => {
  res.json(await getRescueTime(env.RESCUETIME_KEY));
});
