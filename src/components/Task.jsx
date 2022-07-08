import React from 'react';
import './Tasks.css';
import { AiOutlineClose } from "react-icons/ai";
import {BiErrorCircle} from "react-icons/bi";
import {useHistory} from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
   const history = useHistory();

   const HandleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
   };
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="see-task-details-button"   onClick={HandleTaskDetailsClick} >
                    <BiErrorCircle />
                </button>
                <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default Task;