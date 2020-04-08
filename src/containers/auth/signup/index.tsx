import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './styles.scss';
import SignUpForm from '../../../components/auth/signup/signUpForm';
import {ISignUp} from "../../../types";
import {AuthActions} from "../../../redux/actions";

type ISignUpContainerProps = ReturnType<typeof mapDispatchToProps>;

function SignupContainer(props: ISignUpContainerProps) {
    return (
        <div className="signup-form-container">
            <SignUpForm handleSubmit={props.signUp} handleError={console.error} />
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUp: (payload: ISignUp) => dispatch(AuthActions.signUp(payload)),
});

export default connect(null, mapDispatchToProps)(SignupContainer);
