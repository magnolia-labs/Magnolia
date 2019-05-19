import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Panel from './panel.js';

const ProjectCanvas = (props) => {

    //This is the project ID selected
    const project_id = props.match.params.id;

    //This is the keep track of the current node we are on
    const [currentNode, changeCurrentNode] = useState({
        "id": 0,
        "parent_id": '',
        "name": '',
        "stateful": false,
        "props": '',
        "count": ''
    });

    //This is to keep track of the current project tree
    const [projectTree, UpdateProjectTree] = useState([]);

    //This is to keep track of if the current tree has been updated
    const [projectUpdate, setProjectUpdate] = useState(false);

    //This function will get the entire tree information
    //This will be called after every update
    useEffect(() => {
      console.log('Got all the trees :)')

      const metaData = {
        'method': 'GET',
        'Content-type': 'application/json'
      }

    //   get(`/projects/${project_id}`, metaData)
    //     .then(response => response.json())
    //     .then(response => UpdateProjectTree({

    //     }))
    //     .catch(err => console.log('Error ', err))

        
    UpdateProjectTree([
        {
            "id": 7,
            "project_id": 12,
            "parent_id": '',
            "name": "App",
            "stateful": false,
            "state": '',
            "props": '',
            "count": "1"
        },
        {
            "id": 8,
            "project_id": 12,
            "parent_id": 7,
            "name": "Row",
            "stateful": true,
            "state": '',
            "props": "row props",
            "count": "3"
        },
        {
            "id": 9,
            "project_id": 12,
            "parent_id": 8,
            "name": "Box",
            "stateful": false,
            "state": '',
            "props": "box props",
            "count": "5"
        }
    ])

    }, [projectUpdate]);

    //This function will add a new node to the database
    const addNewNode = (e) => {
        const parent_id = e.target.value;
        
        const metaData = {
            'method': 'POST',
            'Content-type': 'application/json',
            'body': JSON.stringify({ parent_id })
        }

        // fetch(`/newnode/${project_id}`, metaData)
        //     .then(response => response.json())
        //     .then(response => {
        //         changeCurrentNode(response) //CHECK: what is the response structure?
                setProjectUpdate(true)
        //     }) //This triggers a event to get all tree values again
        //     .catch(err => console.log(err))

        console.log('new node added!!')
    }

    //This function will update a current node to the database
    const updateNode = (e) => {
        e.preventDefault();

        //update current node in the tree 
        console.log(' id is ', e.target.elements.componentName.id)
        console.log(' name is ', e.target.elements.componentName.value)
        console.log(' stateful is ', e.target.elements.stateful.value)
        console.log(' count is ', e.target.elements.componentCount.value)
        console.log(' props is ', e.target.elements.props.value)

        //send a post to update single node
        //only pass in the single node that needs to be update

  
        const metaData = {
            'method': 'POST',
            'Content-type': 'application/json',
            'body': JSON.stringify({
                // node_id:
                // name:
                // stateful 
                // props
                // count
            })
        };

        // fetch(`/updateproject/${project_id}`, metaData)
        //   .then(response => response.json())
        //   .then(response => setProjectUpdate(true))
        //   .catch(err => console.log('err', err))

        UpdateProjectTree([
            {
                "id": 7,
                "project_id": 12,
                "parent_id": null,
                "name": "App",
                "stateful": false,
                "state": null,
                "props": null,
                "count": "1"
            },
            {
                "id": 8,
                "project_id": 12,
                "parent_id": 7,
                "name": "Row",
                "stateful": true,
                "state": null,
                "props": null,
                "count": "3"
            },
            {
                "id": 9,
                "project_id": 12,
                "parent_id": 8,
                "name": "Box",
                "stateful": false,
                "state": null,
                "props": null,
                "count": "3"
            }
        ])
        setProjectUpdate(true);
    }

    //This function will set the current node the user is viewing
    const setViewingNode = (e) => {
        const node_id = e.target.value;
        
        projectTree.map(node => {
            if(node.id == node_id){
                changeCurrentNode(node);
            }
        })
    }

    //This function will create all the nodes on the page
    const arrayOfNodes = [];

    projectTree.map((node) => {
        arrayOfNodes.push(
            <NodeWrapper>
                <Node value={node.id} onClick={setViewingNode}> My parent is {node.parent_id} </Node>
                <AddNode value={node.parent_id} onClick={addNewNode}> Add a new node </AddNode>
            </NodeWrapper>
        )
    })

    return (
       <React.Fragment>
        <ProjectTitle>Project: </ProjectTitle>
        <BodyOfProject>
            <Canvas>
                Canvas
                {arrayOfNodes}
            </Canvas>
            <Panel saveProject={updateNode} currentNode={currentNode} />
        </BodyOfProject>
      </React.Fragment>
    )
}

export default ProjectCanvas;


//These are the styled components 
const Canvas = styled.div`
    border: 1px solid black;
    width: 500px;
    height: 500px;
` 

const BodyOfProject = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: flex-start;
`

const ProjectTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
`

const Node = styled.button`
  padding: 20px;
  border-radius: 40px;
  font-family: 'Poppins', sans-serif;
  :focus {
    outline: none; 
  }
`

const AddNode = styled.button`
  font-family: 'Poppins', sans-serif;
  border: none;
  :focus {
    outline: none; 
  }
`

const NodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`