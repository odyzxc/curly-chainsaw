import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import {
  isUsersDataLoaded,
  isUsersDataLoading,
  getFilteredUsersData,
  isUsersDataFailed,
} from "./selectors";
import LoadingContainer from "../../components/LoadingContainer/LoadingContainer";

import { getUsers } from "./usersDataSlice";
import UsersList from "./UsersList";
import { Title, UsersMain, Error } from "./styled";
import SearchBar from "../../components/SearchBar/SearchBar";

export function Users() {
  const dispatch = useDispatch();

  const areUsersLoading = useSelector(isUsersDataLoading);
  const areUsersLoaded = useSelector(isUsersDataLoaded);
  const areUsersFailed = useSelector(isUsersDataFailed);

  const [searchTerm, setSearchTerm] = useState("");

  const users = useSelector(getFilteredUsersData(searchTerm));

  const onSearch = debounce((search) => setSearchTerm(search), 500);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <UsersMain.Container>
      <Title>Users list</Title>
      <SearchBar onChange={onSearch} disabled={areUsersLoading} />
      <LoadingContainer isLoading={areUsersLoading && !areUsersLoaded}>
        <UsersList users={users} />
      </LoadingContainer>
      {areUsersFailed && (
        <Error>"Sorry could not fetch users data. Please try again."</Error>
      )}
    </UsersMain.Container>
  );
}
