/* eslint-disable @typescript-eslint/no-namespace */
import { createAction } from 'redux-actions';
import { IUser } from '../../types';

enum Type {
    SET_USER = 'SET_USER'
}

const setUser = createAction<IUser>(Type.SET_USER);

export const UserActions = {
    Type,

    setUser,
}

export type UserActions = Omit<typeof UserActions, 'Type'>;