import React, { FormEvent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import './styles.scss';
import { Link } from 'react-router-dom';
import { ILoginArguments } from '../../../types/handlers/ILoginArguments';

interface ILoginFormProps extends FormComponentProps {
    handleSubmit(values: ILoginArguments): void,
    handleError(error: any): void,
}

function LoginForm(props: ILoginFormProps) {
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            if (error) {
                return props.handleError(error);
            }
            props.handleSubmit(values);
        });
    }

    return (
        <Form onSubmit={onSubmit} className="login-form">
            <h3 className="main-label">LOG IN</h3>
            <Form.Item>
                {props.form.getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please add your email!' }],
                })(
                    <Input
                        type="email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please add your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Link to="/forgot" className="login-form-forgot">
                    Forgot password
                </Link>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/signup">register now!</Link>
            </Form.Item>
        </Form>
    )
}

export default Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
