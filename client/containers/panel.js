import React from 'react';
import styled from 'styled-components';

const Panel = () => {
    return (
      <RightPanel>
        <form>
            <label htmlFor="ProjectName">Project Name: </label>
            <input type="text" defaultValue="Enter project name"></input>
            <label htmlFor="Stateful">Is the component stateful? </label>
            <input type="checkbox" name="Stateful" onChange={console.log('changed pref')} defaultChecked></input>
        </form>
      </RightPanel>
    )
}

export default Panel;

const RightPanel = styled.div`
    width: 200px;
    height: 500px;
    border: 1px solid black;
`