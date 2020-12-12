import React from "react";

export const NumberText = (props: { children: React.ReactNode }) => {
  return <div className={"flex items-baseline"}>{props.children}</div>;
};
