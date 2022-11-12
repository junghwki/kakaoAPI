import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookSearch() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async () => {
    if (inputValue) {
      navigate("/booksearch/result", {
        state: {
          query: inputValue,
          sort: "accuracy",
          page: 1,
          size: 50,
        },
      });
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeValue}></input>
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default BookSearch;
