import React from 'react';
import styled from 'styled-components';

const Login = () => {

    return (
      <LoginScreen>
        <LoginBtn>Login with Google</LoginBtn>
      </LoginScreen>
    )
}

export default Login;

const LoginBtn = styled.button`
  font-family: 'Raleway', sans-serif;
  padding: 10px;
  border-radius: 3px;

  :focus {
    outline: none; 
  }
`

const LoginScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`