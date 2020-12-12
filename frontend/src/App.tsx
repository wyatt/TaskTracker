import React from "react";
import { HomeworkBar } from "./components/HomeworkBar";
import { RescuetimeBar } from "./components/RescuetimeBar";

export const App = () => {
  return (
    <div className={"flex flex-col w-full p-6 md:w-1/2 md:p-0 space-y-5"}>
      <HomeworkBar />
      <RescuetimeBar />
    </div>
  );
};
