import React, { useEffect } from "react";
import getToken from "./query/getToken";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setTokenAction } from "./redux/action";
import { useNavigate } from "react-router-dom";

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(async (code) => getToken(code), {
    onSuccess: async (res) => {
      dispatch(setTokenAction(res));
      navigate("/mypage");
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
      <h2>login...</h2>
    </div>
  );
};

export default KakaoRedirectHandler;
