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
      {id: 0, content: 'Task 1', done: false, deadline: '2020-06-29', priority: true, finishDate: ''},
      {id: 1, content: 'zzz', done: false, deadline: '2020-06-30', priority: false, finishDate: ''},
      {id: 2, content: 'Task 3', done: true, deadline: '2020-07-01', priority: true, finishDate: ''},
      {id: 3, content: 'Task 4', done: false, deadline: '2020-07-02', priority: false, finishDate: ''},
      {id: 4, content: 'Task 5', done: true, deadline: '2020-07-03', priority: true, finishDate: ''},
    ],
  }
  
  componentDidMount() {
    const date = new Date().toISOString().slice(0,10)
    const actualDate = date
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
    let id = 0
    if(this.state.tasks.length > 0){
      this.state.tasks.map(task => (task.id >= id ? id = task.id+1 : null))
    }
    this.setState({
      taskInput: "",
      taskPriority: false,
      taskDeadline: "",
      actualDate: '',
      finishDate: '',
      tasks: this.state.tasks.concat({
        id, 
        content: this.state.taskInput,
        priority: this.state.taskPriority,
        done: false,
        deadline: this.state.taskDeadline
      })
    })
  }

  handleTaskDelete = (taskId)=>{
    const tasks = this.state.tasks.filter(task => (task.id !== taskId))
    this.setState({
      tasks
    })
  }

  handleTaskDone = (taskId)=>{
    const tasks = this.state.tasks.map(task => {
      if(task.id === taskId){
        task.done = !task.done
        task.finishDate = new Date().getTime()
      }
      return task
    })
    this.setState({tasks})
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
        <TasksList 
          tasks={this.state.tasks}
          delete={this.handleTaskDelete}
          status={this.handleTaskDone}
        />

      </div>
    );
  }
}

export default App;
