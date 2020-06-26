import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import TasksList from './TasksList'


class App extends Component {

  state={
    taskInput: "",
    taskPriority: false,
    taskDeadline: "",
    actualDate: '',
    maxID: 0,
    tasks: [
      {id: 1, content: 'Pierwszy task', priority: false, done: false, deadline: ''},
      {id: 2, content: 'Drugi task', priority: true, done: true, deadline: ''},
    ],
  }
  
  componentDidMount() {
    const date = new Date().toDateString()
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth() + 1
    const year = new Date(date).getFullYear()
    const actualDate = `${year}-${month<10 ? '0'+month : month}-${day}`
    this.setState({
      taskDeadline : actualDate,
      actualDate,
    })
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
    this.setState({
      taskDeadline: e.target.value
    })
  }
  
  handleSubmit=(e)=>{
    e.preventDefault()
    let maxId = 0
    if(this.state.tasks.length > 0){
      this.state.tasks.map(task => (task.id > maxId ? maxId = task.id : null))
    }
    this.setState({
      tasks: this.state.tasks.concat({
        id: maxId, 
        content: this.state.taskInput,
        priority: this.state.taskPriority,
        done: false,
        deadline: this.state.taskDeadline
      })
    })
  }

  findMaxID=()=>{
    
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
          actualDate={this.state.actualDate}
          submit={this.handleSubmit}
          />
        <br/>
        =================================================
        <br/>
        <TasksList tasks={this.state.tasks}/>

      </div>
    );
  }
}

export default App;
