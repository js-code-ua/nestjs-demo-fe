import React from 'react';
import LoginForm from '../../../components/auth/login/loginForm';

import './styles.scss';

export default function LoginContainer() {
    return (
        <div className="login-form-container">
            <LoginForm handleSubmit={console.log} handleError={console.error} />
        </div>
    )
}
