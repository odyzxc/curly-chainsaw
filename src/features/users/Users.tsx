import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsersData,
  isUsersDataLoaded,
  isUsersDataLoading,
} from './selectors';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

import { getUsers } from './usersDataSlice';

export function Users() {
  const dispatch = useDispatch();

  const areUsersLoading = useSelector(isUsersDataLoading);
  const areUsersLoaded = useSelector(isUsersDataLoaded);
  const users = useSelector(getUsersData); // TODO move
  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    <LoadingContainer isLoading={areUsersLoading && !areUsersLoaded}>
        <div>USERS: {JSON.stringify(users)}</div>
    </LoadingContainer>
  );
}
