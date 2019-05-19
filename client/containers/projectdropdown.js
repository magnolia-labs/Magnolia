import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDropdown = () => {

  //This state tracks what current project the user is viewing
  const [projectID, setProjectID] = useState({
      project_id: null,
      redirect: false
  });
  //This state tracks the list of project IDs and names
  const [allProjects, setAllProjects] = useState([]);


  //This function will fetch all the current projects (after render)
  //The response will be ID list of projects and their names
  useEffect(() => {
    const metaData = {
        'method': 'GET',
        'Content-type': 'application/json'
    }

    // fetch('/getallprojects', metaData)
    //     .then(response => response.json())
    //     .then(response => setAllProjects([
    //         {
    //             project_id: 1,
    //             project_name: 'first project'
    //         },
    //         {
    //             project_id: 2,
    //             project_name: 'second project'
    //         },
    //         {
    //             project_id: 3,
    //             project_name: 'third project'
    //         }
    //     ]))
    //     .catch(err => console.log(err))

    /*
      response:
        [
            {
                project_name:
                project_id:
            },
            ...
        ]

    */

   setAllProjects([
    {
        project_id: 4,
        project_name: 'fourth project'
    },
    {
        project_id: 5,
        project_name: 'fifth project'
    },
    {
        project_id: 6,
        project_name: 'sixth project'
    }
   ])

  },[]);

    
  const renderRedirect = () => {
    if(projectID.redirect){
      return <Redirect to={{
        pathname: `/project/${projectID.project_id}`,
        project: projectID
      }}/>;
    }
  }

  //This function gets a list of all the current projects and puts them into an array of dropdown options
  const listOfProjects = allProjects.map(project => {
    return <option value={project.project_id}>{project.project_name}</option>
  });

  return (
    <React.Fragment>
        {renderRedirect()}
        <Dropdown onChange={(e) => setProjectID({ project_id: e.target.value, redirect: true })}>
            {listOfProjects}
        </Dropdown>
    </React.Fragment>
  ); // end of return
}

export default ProjectDropdown;

const Dropdown = styled.select`
    padding: 10px 40px;
    margin: 10px;
    width: auto;
    height: 45px;
    border: none;
    font-family: 'Poppins', sans-serif;
    border-radius: 3px;

    :focus {
        outline: none;
    }
`