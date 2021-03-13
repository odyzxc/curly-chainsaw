import React, { FunctionComponent } from "react";
import UserItem from "./UserItem";
import { User } from "./types";
import { UserList } from "./styled";

type UserListProps = {
  users: Array<User>;
};

const UsersList: FunctionComponent<UserListProps> = ({ users }) => (
  <UserList.Container role="list">
    {users.map((user) => (
      <UserItem
        userId={user.id}
        name={user.name}
        username={user.username}
        key={`userListKey-${user.id}-${user.username}`}
      />
    ))}
  </UserList.Container>
);

export default UsersList;
