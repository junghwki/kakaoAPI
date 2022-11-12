import React, { useEffect } from "react";
import axios from "axios";
import getToken from "./query/getToken";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setTokenAction } from "./redux/action";
import { Link } from "react-router-dom";
const KakaoRedirectHandler = () => {
  const dispatch = useDispatch();

  const mutation = useMutation(async (code) => getToken(code), {
    onSuccess: async (res) => {
      dispatch(setTokenAction(res));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    mutation.mutate(code);
  }, []);

  return (
    <div>
      <Link to="/mypage">정보 확인</Link>
    </div>
  );
};

export default KakaoRedirectHandler;
