import { FC } from "react";
import { Navigate } from "react-router-dom";

type AuthType = {
  isAuth: boolean;
};

const ForAuth: FC<AuthType> = ({ isAuth }) => {
  return <>{!isAuth ? <Navigate to={"/"} /> : <h1>Вы авторизовались!</h1>}</>;
};

export default ForAuth;
