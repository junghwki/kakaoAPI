import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./auth.js";

const LoginButtonStyleC = styled.div`
  background-color: red;
`;

function Login() {
  return (
    <LoginButtonStyleC>
      <a href={KAKAO_AUTH_URL}>
        <h1>카카오 로그인 하기</h1>
      </a>
    </LoginButtonStyleC>
  );
}

export default Login;
