import React from "react";

export const BaseContainer = (props: { children: React.ReactNode }) => {
  return <div className={"flex flex-col space-y-3"}>{props.children}</div>;
};
