import React from "react";
import useStore from "../../../hooks/store";

export const PreviewCar = () => {
  const { state } = useStore();
  console.log(state);
  return <h1>PreviewCar</h1>;
};
