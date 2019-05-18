import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCanvas from './project.js';

const Homepage = (props) => {

    const [age, setAge] = useState(0);
    const [newProject, setNewProject] = useState(false);

    const addNewProject = () => {
        setNewProject(true);
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
        { newProject && <ProjectCanvas /> }
      </React.Fragment>
    )
}

export default Homepage;

const NewProjectBtn = styled.button`
    :focus {
        outline: none;
    }
`