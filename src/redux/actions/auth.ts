import { createAction } from 'redux-actions';
import { IAuth, ILogin, ISignUp } from '../../types/auth';

enum Type {
    SIGN_IN = 'SIGN_IN',
    SET_AUTH = 'SET_AUTH',
    SIGN_UP = 'SIGN_UP',
}

const setAuthInfo = createAction<IAuth>(Type.SET_AUTH);
const signIn = createAction<ILogin>(Type.SIGN_IN);
const signUp = createAction<ISignUp>(Type.SIGN_UP);



export const AuthActions = {
    Type,

    setAuthInfo,
    signIn,
    signUp,
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>;