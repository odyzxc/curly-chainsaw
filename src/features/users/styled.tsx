import styled from "styled-components";

const Id = styled.div`
  margin: 10px;
  color: gray;
`;

const Name = styled.div`
  margin: 10px;
`;

const Username = styled.div`
  margin: 10px;
  color: gray;
`;

const UserItemContainer = styled.div`
  display: flex;
`;

export const User = {
  Id,
  Name,
  Username,
  Container: UserItemContainer,
};

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserList = {
  Container: UserListContainer,
};

const UsersContainer = styled.div`
  margin: auto;
  width: 50%;
  display: flex;
  flex-flow: column;
`;

export const UsersMain = {
  Container: UsersContainer,
};

export const Title = styled.h1`
  text-align: center;
`;
