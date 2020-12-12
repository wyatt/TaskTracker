import useSWR from "swr";
import { HomeworkItem, RescueTimeData } from "./types";

export const useHomework = () => {
  return useSWR<HomeworkItem[]>("/homework/");
};

export const useRescueTime = () => {
  return useSWR<RescueTimeData>("/rescuetime/");
};
