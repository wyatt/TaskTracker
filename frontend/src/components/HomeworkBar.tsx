import React from "react";
import { useHomework } from "../core/hooks";
import { TaskBar } from "./helper/TaskBar";
import { BaseContainer } from "./containers/BaseContainer";
import { TextContainer } from "./containers/TextContainer";
import { BigText } from "./containers/BigText";
import { TitleText } from "./containers/TitleText";
import { SmallerText } from "./containers/SmallerText";
import { NumberText } from "./containers/NumberText";

export const HomeworkBar = () => {
  const { data, error } = useHomework();
  if (error) return <p>Error loading HomeworkBar</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <BaseContainer>
      <TextContainer>
        <NumberText>
          <BigText>{data.filter((item) => item.completed).length}</BigText>
          <SmallerText>/{data.length}</SmallerText>
        </NumberText>
        <TitleText>Homework</TitleText>
      </TextContainer>
      <TaskBar
        bars={[
          {
            percent: data.filter((item) => item.completed).length / data.length,
            color: "black",
            name: "homework",
          },
        ]}
      />
    </BaseContainer>
  );
};
