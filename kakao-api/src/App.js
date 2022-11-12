import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Page/Main";
import Login from "./components/Page/Login";
import KakaoRedirectHandler from "./components/KakaoRedirectHandler";
import { useState } from "react";
import MyPage from "./components/Page/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao" element={<KakaoRedirectHandler />} />
      </Routes>
    </>
  );
}

export default App;
