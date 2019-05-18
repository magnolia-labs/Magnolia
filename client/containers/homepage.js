import React from 'react';
import styled from 'styled-components';

const Homepage = () => {

    return (
      <React.Fragment>
        <NewProjectBtn>New Project</NewProjectBtn>
        <select>    
            <option value="test">test</option>
        </select>
        <h1> this is the home page </h1>
      </React.Fragment>
    )
}

export default Homepage;

const NewProjectBtn = styled.button`
    :focus {
        outline: none;
    }
`