import { RescuetimeItem } from "../types";
import fetch from "node-fetch";

export const getRescueTime = async (apiKey: string) => {
  const apidata: RescuetimeItem[] = await fetch(
    `https://www.rescuetime.com/anapi/data?key=${apiKey}&format=json&restrict_kind=efficiency`,
  )
    .then(async (res) => await res.json())
    .then((data) => data.rows);
  const total = apidata.reduce((a: number, b: RescuetimeItem) => {
    return a + b[1];
  }, 0);
  const neutral: RescuetimeItem | undefined = apidata.find((item) =>
    item[3].includes("Neutral"),
  );
  const efficiency = {
    productive: apidata
      .filter((item) => item[3].includes("Productive"))
      .reduce((a, b) => a + b[1], 0),

    distracting: apidata
      .filter((item) => item[3].includes("Distracting"))
      .reduce((a, b) => a + b[1], 0),
    neutral: neutral ? neutral[1] : 0,
  };
  return {
    total,
    ...efficiency,
  };
};
