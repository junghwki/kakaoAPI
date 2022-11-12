import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./auth.js";

const LoginButtonStyleC = styled.div`
  & a {
    text-decoration: none;
  }
`;

function Login() {
  return (
    <LoginButtonStyleC>
      <a href={KAKAO_AUTH_URL}>
        <h2>카카오계정 정보확인</h2>
      </a>
    </LoginButtonStyleC>
  );
}

export default Login;
