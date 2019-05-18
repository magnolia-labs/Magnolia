import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCanvas from './project.js';
import ProjectDropdown from './projectdropdown.js';

const Homepage = (props) => {

    //This state tracks the display of a new project
    const [newProject, setNewProject] = useState(false); 

    //This state tracks what current project the user is viewing
    const [currentProject, updateCurrentProject] = useState({});

    const addNewProject = (props) => {
        setNewProject(true);
        console.log(' i am in here')
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
            .then(response => {
                updateCurrentProject({
                    project_id: response.project_id, //confirm with backend naming
                    node_id: response.head_id,
                    stateful: response.stateful,
                    state_props: response.state_props,
                    count: response.count,
                    children: [{ node_id: 4}, { node_id: 3}, { node_id: 5},]
                })
            })
            .catch(err => console.log('err', err))

    }  

    return (
      <React.Fragment>
        { !newProject && <NewProjectBtn onClick={addNewProject}>New Project</NewProjectBtn>}
        { !newProject && <ProjectDropdown />}
       <form>
            {/* <select>    
                <option value="project1">Project One</option>
                <option value="project2">Project Two</option>
            </select> */}
        </form>
        { newProject && <ProjectCanvas project={currentProject}/> }
      </React.Fragment>
    )
}

export default Homepage;

const NewProjectBtn = styled.button`

    padding: 10px;
    border-radius: 3px;

    :focus {
        outline: none;
    }
`