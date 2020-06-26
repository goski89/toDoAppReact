import React from 'react';
import './Task.css'
function Task(props) {
    return (
        props.tasks.map(task => (<span>{task.content} - {task.deadline}</span>))
        
    );
}

export default Task;