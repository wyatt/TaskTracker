import React from "react";
import styled from "styled-components";

export const TaskBar = (props: {
  bars: { percent: number; color: string; name: string }[];
}) => {
  return (
    <div
      className={
        "w-full h-10 border border-black rounded-xl overflow-hidden flex shadow-xl"
      }
    >
      <>
        {props.bars.map((item) => {
          return (
            <Bar
              key={item.name}
              percent={item.percent}
              className={`bg-${item.color}`}
            />
          );
        })}
      </>
    </div>
  );
};

const Bar = styled.div<{ percent: number }>`
  width: ${(props) => props.percent * 100}%;
  height: 100%;
`;
