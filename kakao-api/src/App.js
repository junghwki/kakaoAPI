import { Route, Routes } from "react-router-dom";
import Main from "./components/Page/Main";
import Login from "./components/Page/Login";
import KakaoRedirectHandler from "./components/KakaoRedirectHandler";
import MyPage from "./components/Page/MyPage";
import BookSearch from "./components/Page/BookSearch";
import BookSearchResult from "./components/Page/BookSearchResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booksearch" element={<BookSearch />} />
        <Route path="/booksearch/result" element={<BookSearchResult />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao" element={<KakaoRedirectHandler />} />
      </Routes>
    </>
  );
}

export default App;
