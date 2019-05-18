import React, { useState } from 'react';
import styled from 'styled-components';
import Panel from './panel.js';

const ProjectCanvas = () => {

    const [panelOpen, setPanelOpen] = useState(false);

    const openClosePanel = () => {
        if(panelOpen === false) setPanelOpen(true);
        else setPanelOpen(false);
    }

    return (
      <BodyOfProject>
        <Canvas>
            This is a project canvas
            <button onClick={ openClosePanel }> This is a node </button>
        </Canvas>
        <Panel />
      </BodyOfProject>
    )
}

export default ProjectCanvas;

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