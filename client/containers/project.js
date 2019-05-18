import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Panel from './panel.js';

const ProjectCanvas = ({ project }) => {

    //This is the keep track of the current node we are on
    const [curentNode, changeCurrentNode] = useState(project);

    const switchNodeDislay = (e) => {
        let noMatch = true;
        for(let child in project.children){
            if(project.children[child].node_id == e.target.id){
                console.log('match')
                let noMatch = false;
                console.log(project.children[child])
                changeCurrentNode(project.children[child]);

            }
        } //end of for loop
        if(noMatch) changeCurrentNode(project);
    }

    const addNewNode = (e) => {

    }

    useEffect(() => {   
        console.log('in use effect')
    }, []);
    

    console.log(' project ', project)
    console.log(' current Node is ', curentNode)


    //This function will create all the nodes on the page
    const arrayOfNodes = [];

    const createNodes = () => {
        if(Array.isArray(project.children)){
            project.children.map((child) => {
                arrayOfNodes.push(
                <div>
                    <button onClick={ switchNodeDislay } id={ child.node_id }> This is a node{child.node_id} </button>
                    <button onClick={ addNewNode } id={ child.node_id }> Add a child </button>
                </div>
                )
            })
       }
    } 

    //This is the return function of the final nodes
    return (
      <BodyOfProject>
        <Canvas>
            This is a project canvas
            <div>
                <button onClick={ switchNodeDislay } id={ project.node_id }> This is a node{project.node_id} </button>
                <button onClick={ addNewNode } id={ project.node_id }> Add a child </button>
            </div>
            {createNodes()}
            {arrayOfNodes}
        </Canvas>
        <Panel node_id={ curentNode.node_id } stateful={ project.stateful }/>
      </BodyOfProject>
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