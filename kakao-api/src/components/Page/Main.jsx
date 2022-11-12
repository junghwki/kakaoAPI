import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";

function Main() {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      <Login />
    </>
  );
}

export default Main;
