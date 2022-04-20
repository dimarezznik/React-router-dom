import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderType = {
  isAuth: boolean;
  setIsAuth: (arg: boolean) => void;
};

const Header: FC<HeaderType> = ({ setIsAuth, isAuth }) => {
  return (
    <header>
      <nav>
        <ul className={s.navigation_panel}>
          <li>
            <NavLink to="/">Домашнаяя страница</NavLink>
          </li>
          <li>
            <NavLink to="users">Пользователи</NavLink>
          </li>
          <li>
            <NavLink to="/for-auth">
              Страница для авторизованных пользователей
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => setIsAuth(true)}>Авторизоваться</button>
      {isAuth && <span>✓</span>}
    </header>
  );
};

export default Header;
