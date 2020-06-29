import React from 'react';
import './Task.css'

function Task(props) {
    const finish = new Date(props.finishDate).toLocaleString()
    return (
        <span className='task'>
            <span className={props.priority ? 'priority' : null}>{props.content}</span> - {props.deadline}
            <button className='btnDelTask' onClick={props.delete.bind(this, props.id)}>X</button>
            <button className='btnDoneTask' onClick={props.done.bind(this, props.id)}>{props.status ? 'Undone' : 'Done'}</button>
            {props.finishDate ? <span><br/>Data zakończenia: {finish}</span> : null}
        </span>
        
    );
}

export default Task;