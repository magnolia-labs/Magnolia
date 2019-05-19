import React from 'react';
import styled from 'styled-components';

const Login = () => {

    return (
      <LoginBtn>Login with Google!</LoginBtn>
    )
}

export default Login;

const LoginBtn = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 10px;
  border-radius: 3px;

  :focus {
    outline: none; 
  }
`