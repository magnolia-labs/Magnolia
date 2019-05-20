import React from 'react';
import styled from 'styled-components';

const Login = () => {

    return (
      <LoginScreen>
        <WelcomeMessage>
          Welcome to Magnolia Labs
        </WelcomeMessage>
        <LoginBtn>Login with Google</LoginBtn>
      </LoginScreen>
    )
}

export default Login;

const LoginBtn = styled.button`
  font-family: 'Raleway', sans-serif;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 18px;

  :focus {
    outline: none; 
  }

  :hover {
    box-shadow: 1px 2px 4px grey;
  }
`

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: #f8f9fb;
  border-radius: 3px;
`

const WelcomeMessage = styled.section`
  font-family: 'Raleway', sans-serif;
  min-width: 600px;
  border: 1px solid black;
  text-align: center;
  padding: 100px 0px;
  font-size: 40px;
  background-color: white;
`