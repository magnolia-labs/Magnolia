import React from 'react';
import styled from 'styled-components';

const Login = () => {

    return (
      <LoginBtn>Login</LoginBtn>
    )
}

export default Login;

const LoginBtn = styled.button`
    :focus {
        outline: none;
    }
`