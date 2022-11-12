import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import KakaoBookSearch from "../query/kakaoBookSearch";

function BookSearch() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async () => {
    navigate("/booksearch/result", {
      state: {
        query: inputValue,
        sort: "accuracy",
        page: 1,
        size: 50,
      },
    });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeValue}></input>
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}

export default BookSearch;
