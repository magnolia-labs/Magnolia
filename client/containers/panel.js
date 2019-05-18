import React from 'react';
import styled from 'styled-components';

const Panel = ({ node_id }) => {
    console.log('node in panel ', node_id)
    return (
      <RightPanel>
        <form>
            <div>
              <label htmlFor="ProjectName">Project Name: </label>
              <input type="text" defaultValue="My Project"></input>
            </div>
            <div>
              <label htmlFor="ComponentName">Component Name: </label>
              <input type="text" defaultValue={node_id}></input>
            </div>
            <div>
              <label htmlFor="Stateful">Is the component stateful? </label>
              <input type="checkbox" name="Stateful" onChange={console.log('')} defaultChecked></input>
            </div>
            <div>
              <label htmlFor="Count">Count: </label>
              <input type="text" defaultValue="1"></input>
            </div>
            <div>
              <label htmlFor="Props">Props: </label>
              <input type="text" defaultValue=""></input>
            </div>
            <button>Update Node</button>
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