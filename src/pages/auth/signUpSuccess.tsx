import React, { Dispatch } from 'react';
import { Result, Button } from 'antd';
import { push } from 'react-router-redux'
import { connect } from "react-redux";

function SignUpSuccess(props: ReturnType<typeof mapDispatchToProps>) {
    return <Result
                status="success"
                title="Successfully signed up!"
                subTitle="Congratulations! You've just created new account!"
                extra={[
                    <Button
                        type="primary"
                        key="console"
                        onClick={props.forwardTo}>
                        Go to SignIn
                    </Button>
                ]}
    />;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    forwardTo: () => dispatch(push('/'))
});

export default connect(null, mapDispatchToProps)(SignUpSuccess);