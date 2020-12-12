import React from "react";

export const SmallerText = (props: { children: React.ReactNode }) => {
  return <p className={"text-black text-4xl font-bold"}>{props.children}</p>;
};
