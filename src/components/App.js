import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import TasksList from './TasksList'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      taskInput: "",
      taskPriority: false,
      taskDeadline: "",
      minDate: '',
      tasks: [
        {id: 1, content: 'Pierwszy task', priority: false, done: false, deadline: ''},
        {id: 2, content: 'Drugi task', priority: true, done: false, deadline: ''},
      ],
    }
    this.getActualDate =()=>{
      const actualDate = new Date()
      actualDate.getDate()
      console.log('1' + actualDate);
    }
    this.getActualDate()
  }

  handleTaskInput=(e)=>{
    this.setState({
        taskInput: e.target.value
    })
  }

  handleTaskPriority=(e)=>{
    this.setState({
        taskPriority: e.target.checked
    })
  }

  handleTaskDeadline=(e)=>{
    console.log(e.target.value);
    this.setState({
      taskDeadline: e.target.value
  })
  }


  render() {
    return (
      <div>
        <Form 
          handleTaskInput={this.handleTaskInput} 
          taskInput={this.state.taskInput}
          handleTaskPriority={this.handleTaskPriority}
          taskPriority={this.state.taskPriority}
          handleTaskDeadline={this.handleTaskDeadline}
          taskDeadline={this.state.taskDeadline}
          />
        <br/>
        =================================================
        <br/>
        <TasksList/>

      </div>
    );
  }
}

export default App;
