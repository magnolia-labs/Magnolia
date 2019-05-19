import React from 'react';
import styled from 'styled-components';

const Panel = ({ saveProject, currentNode }) => { 
    const { count, name, id, parent_id, props, stateful } = currentNode;
    console.log('curr node ', currentNode)
    console.log('name is ', name)
    console.log(' count is ', count)
    return (
      <RightPanel>
        <NodeInfo onSubmit={saveProject}>
          <label>
            Component Name: 
            <input type="text" name="componentName" id={id} value={name}></input>
          </label>

          <label>
            Is the component stateful?
            <input type="checkbox" name="stateful" value={true} defaultChecked></input>
          </label>

          <label>
            How many components are there?:
            <input type="text" name="componentCount" value={count}></input>
          </label>

          <label>
              Props:
              <input type="text" name="props" value={props}></input>
          </label>

          <button>Update Node</button>
        </NodeInfo>
      </RightPanel>
    )
}

export default Panel;

const RightPanel = styled.div`
  width: 250px;
  height: 500px;
  font-size: 13px;
  border: 1px solid black;
  font-family: 'Poppins', sans-serif;

  :focus{
    outline: none;
  }
`

const NodeInfo = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between

`