import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import getUserInfo from "../query/getUserInfo";

function MyPage() {
  const token = useSelector((state) => state.token);
  const { data, isLoading, isError } = useQuery(["getUserInfo"], () =>
    getUserInfo({ token: token.access_token })
  );

  if (isLoading) return <div>Loading</div>;
  if (!data) return <></>;
  if (isError) return <div>error</div>;

  return (
    <>
      <h4>토큰: {token.access_token}</h4>
      <h4>닉네임: {data.kakao_account.profile.nickname}</h4>
      <h4>프로필사진: </h4>
      <img src={data.kakao_account.profile.profile_image_url} />
      <h4>생일:{data.kakao_account.birthday}</h4>
      <h4>성별:{data.kakao_account.gender}</h4>
      <a href="/">home</a>
    </>
  );
}

export default MyPage;
