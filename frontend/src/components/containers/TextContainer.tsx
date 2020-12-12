import React from "react";

export const TextContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className={"flex justify-between items-baseline"}>
      {props.children}
    </div>
  );
};
