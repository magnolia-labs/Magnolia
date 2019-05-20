import React from 'react';
import styled from 'styled-components';

const Panel = ({ saveProject, currentNode }) => { 
    const { count, name, id, parent_id, props, stateful } = currentNode;
    console.log('curr node ', currentNode)
    return (
      <RightPanel>
        <NodeInfo onSubmit={saveProject}>
          <TextField>
            <span>Component Name: </span>
            <input className="field" type="text" name="componentName" id={id} defaultValue={name}></input>
          </TextField>

          <label htmlFor="stateful">
            <input type="checkbox" name="stateful" value="stateful" defaultChecked={stateful}></input>
            
            <span>Stateful?</span>
          </label>

          <TextField>
            <span>How many components are there?:</span>
            <input className="field" type="text" name="componentCount" defaultValue={count}></input>
          </TextField>

          <TextField>
            <span>Props:</span>
            <input className="field" type="text" name="props" defaultValue={props}></input>
          </TextField>

          <UpdateBtn>Update Component</UpdateBtn>
        </NodeInfo>
      </RightPanel>
    )
}

export default Panel;

const RightPanel = styled.div`
  width: 250px;
  height: 500px;
  font-size: 13px;
  border-left: 1px solid black;
  font-family: 'Raleway', sans-serif;

`

const NodeInfo = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  padding: 10px;

`

const UpdateBtn = styled.button`
  border: 1px solid #680E4B;
  border-radius: 3px;
  padding: 10px;
  width: auto;
  color: white;
  transition: 0.3s;
  margin-top: 50px;
  background-color: #680E4B;

  :focus{
    outline: none;
  }

  :hover {
    box-shadow: 1px 2px 10px grey;
  }
`

const TextField = styled.label`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`