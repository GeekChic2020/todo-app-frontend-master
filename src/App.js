import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskCount from './components/TaskCount';
import TaskList from './components/TaskList';
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Check Passports", completed: false },
      { id: uuidv4(), description: "Book Flights", completed: false },
      { id: uuidv4(), description: "Pack Luggage", completed: false }
    ]
  };

  deleteTask = (taskId) => {

    const tasks = this.state.tasks;

    const updatedTasks = tasks.filter(item => item.id !== taskId);

    this.setState({
      tasks: updatedTasks
    });
  }

  completeTask = (taskId) => {

    const tasksBeingUpdated = this.state.tasks;

    for (let i = 0; i < tasksBeingUpdated.length; i++) {
      const task = tasksBeingUpdated[i];

      if (task.id === taskId) {

        task.completed = true;
        break;
      }
    }
    this.setState({
      tasks: tasksBeingUpdated
    });
  }

  addTask = (taskDescription) => {

    const taskToAdd = {
      id: uuidv4(), description: taskDescription, completed: false
    };

    console.log("Adding task");
    console.log(taskToAdd);

    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd);
    this.setState({
      tasks: currentTasks
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTask addTaskFunc={this.addTask} />
        <TaskCount taskCount={this.state.tasks.length} />
        <TaskList taskCollection={this.state.tasks}
          deleteTaskFunc={this.deleteTask}
          completedTaskFunc={this.completeTask} />
      </div>
    );
  }
}

export default App;