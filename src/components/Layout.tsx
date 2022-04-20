import React, { FC } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

type LayoutType = {
  isAuth: boolean;
  setIsAuth: (arg: boolean) => void;
};

const Layout: FC<LayoutType> = ({ setIsAuth, isAuth }) => {
  return (
    <div>
      <Header setIsAuth={setIsAuth} isAuth={isAuth} />
      <Outlet />
    </div>
  );
};

export default Layout;
