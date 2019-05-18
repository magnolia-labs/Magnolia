import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCanvas from './project.js';

const Homepage = (props) => {

    const [age, setAge] = useState(0);

    //This state tracks the display of a new project
    const [newProject, setNewProject] = useState(false); 

    //
    const [currentProject, updateCurrentProject] = useState({});

    const addNewProject = (props) => {
        setNewProject(true);

        //USER IS CURRENTLY HARDCODED. MUST UPDATE TO REFLECT ACTUAL CURRENT USER
        const metaData = {
            'method': 'POST',
            'Content-type': 'application/json',
            'body': JSON.stringify({
                'user_id': 1
            })
        }

        fetch('/newproject', metaData)
            .then(response => response.json())
            .then(response => console.log(' response ', response))
            .then(response => {
                updateCurrentProject({
                    project_id: response.project_id, //confirm with backend naming
                    head_id: response.head_id,
                    stateful: response.stateful,
                    state_props: response.state_props,
                    count: response.count,
                    children: []
                })
            })
            .catch(err => console.log(err))

    }

    return (
      <React.Fragment>
        <NewProjectBtn onClick={addNewProject}>New Project</NewProjectBtn>
        <form>
            <select>    
                <option value="project1">Project One</option>
                <option value="project2">Project Two</option>
            </select>
        </form>
        { newProject && <ProjectCanvas project={currentProject}/> }
      </React.Fragment>
    )
}

export default Homepage;

const NewProjectBtn = styled.button`
    :focus {
        outline: none;
    }
`