import React from 'react';
import './styles.scss';
import SignUpForm from '../../../components/auth/signup/signUpForm';

export default function SignupContainer() {
    return (
        <div className="signup-form-container">
            <SignUpForm handleError={console.error} handleSubmit={console.log} />
        </div>
    )
}
