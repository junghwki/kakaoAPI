import React from "react";
import styled from "styled-components";

const BookInfo = styled.div`
  border: 3px black solid;
  width: 45%;
  margin: 1%;
`;

const Title = styled.div`
  text-align: center;
  & a {
    text-decoration: none;
    color: black;
  }
`;

const Data = styled.div`
  min-height: 200px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
`;

const Contents = styled.div`
  margin: 5px;
`;

const Author = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span {
    margin: 5px;
  }
`;

const BookPopupStyledC = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 150px;
  height: 200px;
`;

const Thumbnail = styled.img`
  position: relative;
  width: 150px;
  height: 200px;
`;

function Books({ bookData }) {
  if (!bookData.status || bookData.price < 0 || bookData.sale_price < 0)
    return <></>;
  return (
    <BookInfo>
      <Title>
        <h2>
          <a href={bookData.url}>{bookData.title}</a>
        </h2>
      </Title>
      <Data>
        <ImageWrapper>
          {bookData.thumbnail ? (
            <Thumbnail src={bookData.thumbnail} />
          ) : (
            <Thumbnail src="https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http://search1.daumcdn.net/search/statics/common/img/noimg/4grid.png" />
          )}
          <BookPopupStyledC>
            <h5>정상가격: {bookData.price}</h5>
            <h5>판매가격: {bookData.sale_price}</h5>
            <h5>ISBN: {bookData.isbn}</h5>
          </BookPopupStyledC>
        </ImageWrapper>
        <Contents>{bookData.contents}</Contents>
      </Data>
      <Author>
        <span>저자 | {bookData.authors[0]}</span>
        <span>출판사 | {bookData.publisher}</span>
      </Author>
    </BookInfo>
  );
}

export default Books;
