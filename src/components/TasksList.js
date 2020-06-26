import React from 'react';
import Task from './Task'

function TasksList(props) {
    const undoneTasks = props.tasks.filter(task => (task.done === false))
    const doneTasks = props.tasks.filter(task => (task.done))
    console.log(undoneTasks)
    console.log(doneTasks);
    return (
        <div>
            <Task tasks={undoneTasks}/>
            +++++++++++++++++++++++++++++
            <Task tasks={doneTasks}/>
        </div>
        
    );
}

export default TasksList;