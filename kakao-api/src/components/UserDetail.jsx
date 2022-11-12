import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import getUserInfo from "./query/getUserInfo";

function UserDetail() {
  const userToken = useSelector((state) => state.setToken);
  const { data } = useQuery(["getUserInfo"], () => getUserInfo(token));

  if (data) console.log(data);
  return <span>hi</span>;
}

export default UserDetail;
