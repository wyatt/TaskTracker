import { HomeworkItem } from "../types";
import dayjs from "dayjs";
const { v1: uuid } = require("uuid");

const headers = {
  "accept": "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/json;charset=UTF-8",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
};

export const getHomework = async (
  username: string,
  password: string,
  server: string,
  establishment_id: number,
) => {
  const request = await fetch(`https://${server}/api/`, {
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "EduLink.Login",
      params: {
        username,
        password,
        establishment_id,
      },
      uuid: uuid(),
    }),
    method: "POST",
  });
  return fetchHomework((await request.json()).result.authtoken);
};

export const fetchHomework = async (token: string) => {
  const request = await fetch("https://marlingschool.edulinkone.com/api/", {
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "EduLink.Homework",
      params: { authtoken: token },
      uuid: uuid(),
    }),
    method: "POST",
  });

  const homework: HomeworkItem[] = (await request.json()).result.homework
    .current;
  return homework.map((item) => {
    return {
      id: item.id,
      name: item.activity,
      subject: item.subject,
      due: dayjs(item.due_date, "DD-MM-YY"),
      completed: item.completed,
    };
  });
};
