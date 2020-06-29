import React from 'react';
import Task from './Task'

function TasksList(props) {
    const active = props.tasks.filter(task => task.done === false)
    active.sort((a, b)=>{
        a = a.content.toLowerCase()
        b = b.content.toLowerCase()

        if(a < b) return 1
        else if(a > b) return -1
        else return 0
    })

    const activeTask = active.map(task => 
        <Task
            key={task.id} 
            id={task.id}
            content={task.content} 
            deadline={task.deadline} 
            priority={task.priority}
            status={task.done}
            delete={props.delete}
            done={props.status}
        />
    )

    const done = props.tasks.filter(task => task.done === true)
    done.sort((task1, task2)=> task2.finishDate - task1.finishDate)
    const doneTasks = done.map((task, index) => 
        <Task
            key={index} 
            id={task.id}
            content={task.content} 
            deadline={task.deadline} 
            priority={task.priority}
            status={task.done}
            finishDate={task.finishDate}
            delete={props.delete}
            done={props.status}
        />
        
    )
    return (
        <div>
            <div>
                {activeTask}
            </div>
            <p>-----------------------------------------</p>
            <div>
                {doneTasks}
            </div>
        </div>
    )
}

export default TasksList;