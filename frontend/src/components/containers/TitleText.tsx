import React from "react";

export const TitleText = (props: { children: React.ReactNode }) => {
  return <p className={"text-2xl"}>{props.children}</p>;
};
