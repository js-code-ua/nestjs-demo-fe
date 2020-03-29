import React, { FormEvent } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';

import './styles.scss';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';

const { Option } = Select;

interface ISignUpFormProps extends FormComponentProps {
    handleSubmit(values: any): void;
    handleError(error: any): void;
}

export default Form.create<ISignUpFormProps>()(function SignUpForm(props: ISignUpFormProps) {
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
        <Form onSubmit={onSubmit} className="signup-form" layout="horizontal">
            <h3 className="main-label">SIGN UP</h3>
            <Form.Item>
                {props.form.getFieldDecorator('firstName', {
                    rules: [{ required: true, message: 'Please add your First Name!' }],
                })(
                    <Input
                        type="text"
                        prefix={<Icon type="idcard" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="First Name"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('lastName', {
                    rules: [{ required: true, message: 'Please add your Last Name!' }],
                })(
                    <Input
                        type="text"
                        prefix={<Icon type="idcard" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Last Name"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                })(
                    <Select placeholder="Select gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please add your email!' }],
                })(
                    <Input
                        type="email"
                        prefix={<Icon type="mail" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please add your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('confirmPassword', {
                    rules: [{ required: true, message: 'Please confirm your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Confirm Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="signup-form-button">
                    Sign Up
                </Button>
                Or <Link to="/">Log In</Link>
            </Form.Item>
        </Form>
    )
})
