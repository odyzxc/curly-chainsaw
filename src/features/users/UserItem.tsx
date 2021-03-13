import React, { FunctionComponent } from "react";

import { User } from "./styled";

type UserItemProps = {
  userId: number;
  name: string;
  username: string;
};

const UserItem: FunctionComponent<UserItemProps> = ({
  userId,
  name,
  username,
}) => (
  <User.Container>
    <User.Id>{userId}.</User.Id>
    <User.Name>{name}</User.Name>
    <User.Username>@{username}</User.Username>
  </User.Container>
);

export default UserItem;
