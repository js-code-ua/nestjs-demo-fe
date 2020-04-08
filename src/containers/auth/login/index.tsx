import React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import LoginForm from '../../../components/auth/login/loginForm';

import './styles.scss';
import { IRootState } from '../../../redux/reducers/state';
import { Dispatch } from 'redux';
import { ILogin } from '../../../types';
import { AuthActions } from '../../../redux/actions';

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>;

function LoginContainer(props: ILoginContainerProps) {
    return (
        <div className="login-form-container">
            <LoginForm handleSubmit={props.signIn} handleError={console.error} />
        </div>
    )
}

const mapStateToProps = (state: IRootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    signIn: (payload: ILogin) => dispatch(AuthActions.signIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
