import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import KakaoBookSearch from "../query/kakaoBookSearch";
import Books from "./Books";

const BookList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
      <Link to="/">Home</Link>
      <BookList>
        {data.documents.map((book, index) => (
          <Books key={index} bookData={book} />
        ))}
      </BookList>
    </div>
  );
}

export default BookSearchResult;
