import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import KakaoBookSearch from "../query/kakaoBookSearch";
import Books from "./Books";

function BookSearchResult() {
  const location = useLocation();
  const [queryData] = useState(location.state);

  const { data } = useQuery(["KakaoBookSearch", queryData], () =>
    KakaoBookSearch({ query: queryData })
  );

  if (!data) return <></>;
  else console.log(data);

  return (
    <div>
      <div>
        {data.documents.map((book, index) => (
          <Books key={index} bookData={book} />
        ))}
      </div>
      <Link to="/">BookSearchResult</Link>
    </div>
  );
}

export default BookSearchResult;
