import React from 'react';

function Form(props) {
    return (
        <form onSubmit={props.submit}>
            <div>
                <label htmlFor='priority'>
                    <input 
                        type='text' 
                        value={props.taskInput} 
                        onChange={props.handleTaskInput} 
                        placeholder='dodaj zadanie'
                    />
                    <input 
                        type='checkbox' 
                        checked={props.taskPriority} 
                        onChange={props.handleTaskPriority} 
                        id='priority' 
                        name='priority'
                    />
                    Priorytet
                </label>
            </div>
            <div>
                <label 
                    htmlFor='deadline'>
                    Do kiedy zrobić? 
                    <input 
                        type='date' 
                        value={props.taskDeadline} 
                        min={props.actualDate} 
                        onChange={props.handleTaskDeadline} 
                        id='deadline'
                    />
                </label>
            </div>
            <button>DODAJ</button>
        </form>    
    );
}

export default Form;