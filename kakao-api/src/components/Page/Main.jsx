import React from "react";
import Login from "./Login";
import BookSearch from "./BookSearch";
import styled from "styled-components";

const MainStyleC = styled.div`
  text-align: center;
`;

function Main() {
  return (
    <MainStyleC>
      <Login />
      <BookSearch />
    </MainStyleC>
  );
}

export default Main;
