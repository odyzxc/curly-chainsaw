import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch } from '../../app/store';
import { fetchUsersRequested } from './usersLoadingStatusSlice';
import { getUsers as getUsersApiCall } from './api';
import { fetchUsersFailure, fetchUsersSuccess } from './commonActions';

export type User = {
  id: number,
  name: string,
  username: string
}

type UsersState = {
  users: User[]
}

const initialState: UsersState = {
  users: [],
};

const userDataSlice = createSlice({
  name: 'users/data',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchUsersSuccess.toString()]: (state, { payload } : PayloadAction<Array<User>>) => {
      state.users = payload;
    },
    [fetchUsersFailure.toString()]: state => (state = initialState)
  }
});

export default userDataSlice.reducer;

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchUsersRequested());
    const response = await getUsersApiCall();
    dispatch(fetchUsersSuccess(response.data));
  } catch (err) {
    console.error(err);
    dispatch(fetchUsersFailure());
  }
};
