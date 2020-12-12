import React from "react";

export const BigText = (props: { children: React.ReactNode }) => {
  return (
    <p className={"text-8xl font-bold inline-flex items-center"}>
      {props.children}
    </p>
  );
};
