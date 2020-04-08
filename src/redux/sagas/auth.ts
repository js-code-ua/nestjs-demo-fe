import { put, call, select, takeLatest, } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { AuthActions, UserActions } from '../actions';
import { Action } from 'redux-actions';
import { ILogin, IAuth, IUser, ISignUp } from '../../types';
import { signIn, signUp } from './api';
import * as _ from 'lodash';
import { signUpSuccessRoute } from "../constants/auth";

function* SignInWorker(action: Action<ILogin>) {
    try {
        const { data } = yield call(signIn, action.payload);

        yield put(AuthActions.setAuthInfo(_.pick(data, ['accessToken']) as IAuth));
        yield put(UserActions.setUser(_.omit(data, 'accessToken') as IUser));
    } catch (error) {
        message.error('Failed to login!');
        console.error(error);
    }
}

function* SignUpWorker(action: Action<ISignUp>) {
    try {
        const { data } = yield call(signUp, action.payload);

        yield put(push(signUpSuccessRoute));
    } catch (error) {
        message.error('Failed to sign up!');
        console.error(error);
    }
}

export default function* watchAuth() {
    yield takeLatest(AuthActions.Type.SIGN_IN, SignInWorker);
    yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker);
}