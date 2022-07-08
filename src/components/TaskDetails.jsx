import React from 'react';
import { useHistory, useParams } from "react-router-dom";

import "./TaskDetails.css";
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();

        
        const History = useHistory() ;

    const handleBlackButtonClick = () => {
        History.goBack();
    };

    return (
        <>
            <div className="back-button">
                <Button onClick={handleBlackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2 >{params.taskTitle}</h2>
                <p>CacildisCacildisCacildisCassssssss
                    sssssaaaaaaaaaaaaaaaacildisCacildisCacildisCacildisCacildisCacildisCacils</p>
            </div>
        </>
    );
}

export default TaskDetails;