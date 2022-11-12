import React from "react";
import styled from "styled-components";

const BookInfo = styled.div`
  background-color: red;
`;

const BookCoverImg = styled.img`
  width: 150px;
  &:hover {
    /*width: 200px;*/
  }
`;

function Books({ bookData }) {
  return (
    <BookInfo>
      <div>
        <p>제목:{bookData.title}</p>
        <p>저자:{bookData.authors[0]}</p>
        <p>출판사:{bookData.publisher}</p>
      </div>
      <p>내용:{bookData.contents}</p>
      <BookCoverImg src={bookData.thumbnail} />
    </BookInfo>
  );
}

export default Books;
