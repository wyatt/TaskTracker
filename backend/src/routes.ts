import { getHomework } from "./methods/homework";
import { getRescueTime } from "./methods/rescuetime";
import { Router } from "express";

export const api = Router();

api.get("/homework/", async (req, res) => {
  if (
    !process.env.EDULINK_USERNAME ||
    !process.env.EDULINK_PASSWORD ||
    !process.env.EDULINK_DOMAIN ||
    !process.env.ESTABLISHMENT_ID
  ) {
    res.status(501).end();
    return;
  }
  res
    .json(
      await getHomework(
        process.env.EDULINK_USERNAME,
        process.env.EDULINK_PASSWORD,
        process.env.EDULINK_DOMAIN,
        parseInt(process.env.ESTABLISHMENT_ID),
      ),
    )
    .end();
});

api.get("/rescuetime/", async (req, res) => {
  if (!process.env.RESCUETIME_KEY) {
    res.status(501).end();
    return;
  }
  res.json(await getRescueTime(process.env.RESCUETIME_KEY));
});
