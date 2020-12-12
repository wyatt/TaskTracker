import React from "react";
import { useRescueTime } from "../core/hooks";
import { TaskBar } from "./helper/TaskBar";
import { BaseContainer } from "./containers/BaseContainer";
import { TextContainer } from "./containers/TextContainer";
import { BigText } from "./containers/BigText";
import { TitleText } from "./containers/TitleText";

export const RescuetimeBar = () => {
  const { data, error } = useRescueTime();
  if (error) return <p>Error loading RescuetimeBar</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <BaseContainer>
      <TextContainer>
        <BigText>
          {Math.floor(data.total / 3600)}
          <span>:</span>
          {Math.floor((data.total / 60) % 60)
            .toString()
            .padStart(2, "0")}
        </BigText>
        <TitleText>Screentime</TitleText>
      </TextContainer>
      <TaskBar
        bars={[
          {
            percent: data.productive / data.total,
            color: "blue-400",
            name: "productive",
          },
          {
            percent: data.neutral / data.total,
            color: "gray-400",
            name: "neutral",
          },
          {
            percent: data.distracting / data.total,
            color: "red-400",
            name: "distracting",
          },
        ]}
      />
    </BaseContainer>
  );
};
