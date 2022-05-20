import React, { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../../dto/user";
import s from "./Users.module.css";

interface UsersType {
  users: User[];
}

const Users: FC<UsersType> = ({ users }) => {
  return (
    <ul className={s.users}>
      {users &&
        users.map((user) => {
          return (
            <li className={s.user} key={user.id}>
              <Link className={s.user_text} to={`${user.id}`}>
                {user.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Users;
