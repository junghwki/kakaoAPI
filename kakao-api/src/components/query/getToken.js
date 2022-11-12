import React from "react";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "../Page/auth.js";

const client = axios.create();

const getToken = async (code) => {
  const response = await client.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return response.data;
};

export default getToken;
