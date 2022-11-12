import React from "react";
import axios from "axios";
import { REST_API_KEY } from "../Page/auth";

const client = axios.create();

const KakaoBookSearch = async ({ query }) => {
  const response = await client.get(
    //`https://dapi.kakao.com/v3/search/book?query=${query.query}`,
    `https://dapi.kakao.com/v3/search/book?query=${query.query}&sort=${query.sort}&page=${query.page}&size=${query.size}`,
    {
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    }
  );
  return response.data;
};

export default KakaoBookSearch;
