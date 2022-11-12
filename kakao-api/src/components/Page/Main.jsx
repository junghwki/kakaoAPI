import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import BookSearch from "./BookSearch";

function Main() {
  const data = useSelector((state) => state);
  return (
    <>
      <Login />
      <BookSearch />
    </>
  );
}

export default Main;
