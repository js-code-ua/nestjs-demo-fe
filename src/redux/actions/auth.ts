import { createAction } from 'redux-actions';
import { IAuth } from '../../types/auth';

enum Type {
    SET_AUTH = 'SET_AUTH'
}

const setAuthInfo = createAction<IAuth>(Type.SET_AUTH);

export const AuthActions = {
    Type,

    setAuthInfo,
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>;