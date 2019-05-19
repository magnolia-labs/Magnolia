import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ProjectDropdown from './projectdropdown.js';

const Homepage = (props) => {

    //This state tracks what current project the user is viewing
    const [projectID, setProjectID] = useState(null);
    //This state tracks if the page should be redirected
    const [redirect, setRedirect] = useState(false);
    
    //This function will redirect the user to the correct page with the project ID
    const renderRedirect = () => {
        if(redirect){
            return <Redirect to={{
                pathname: `/project/${projectID}`,
                project: projectID
            }}/>;
        }
    }

    //This function adds a new project to the data base
    //The response is a single project ID
    const addNewProject = () => {
        const metaData = {
            'method': 'POST',
            'Content-type': 'application/json',
        }

        fetch('/newproject', metaData)
            .then(response => response.json())
            .then(response => setProjectID(1)) //The returned project ID is set
            .then(response => setRedirect(true)) //The page is redirected to the project canvas page
            .catch(err => console.log('err', err))  

        /*
            response:
            {
              project_id:
            }

        */
    }  

    return (
      <React.Fragment>
        {renderRedirect()}
        <NewProjectBtn onClick={addNewProject}>Start New Project</NewProjectBtn>
        <ProjectDropdown />
      </React.Fragment>
    )
}

export default Homepage;

const NewProjectBtn = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 10px;
    border-radius: 3px;
    margin-left: 20px;

    :focus {
        outline: none;
    }
`

