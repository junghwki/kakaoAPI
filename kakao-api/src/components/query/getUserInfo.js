import React from "react";
import axios from "axios";

const client = axios.create();

const GetUserInfo = async ({ token }) => {
  if (token) {
    const response = await client.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
};

export default GetUserInfo;
