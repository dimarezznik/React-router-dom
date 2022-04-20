import React, { FC } from "react";
import { User } from "../../../dto/user.dto";

interface UserOneType {
  user: User;
}

const UserOne: FC<UserOneType> = ({ user }) => {
  return (
    <>
      <h1>Name: {user.name}</h1>
      <p>#{user.id}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default UserOne;
