import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (  
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime suscipit facilis eligendi voluptatem odio vitae perspiciatis ea voluptates temporibus! Esse sint quia tenetur unde obcaecati explicabo veritatis enim nemo nulla?
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;