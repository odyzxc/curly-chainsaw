import { createAction } from '@reduxjs/toolkit';
import { User } from './usersDataSlice';


export const fetchUsersSuccess = createAction<User[]>("fetchUsersSuccess");
export const fetchUsersFailure = createAction("fetchUsersFailure");