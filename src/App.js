import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "../src/styles.css";




const todoItems = [
  {
    task: 'complete this app',
    id: 123456,
    completed: false
},

{
  task: 'pick up milk',
  id: 123457,
  completed: true
}
];




class App extends React.Component {
  // you will need a place to store your state in this component.
state = {
  todoList: todoItems,
};

addNewItem = newTaskName => {
  console.log('new item triggered');
  const newState = {
    ...this.state,
    todoList: [
      ...this.state.todoList,
      {task: newTaskName,  id: Date.now(), completed: false }
    ]
  };
  this.setState(newState);
};

toggleComplete = id => {
  console.log('index.js: App: toggleComplete: id: ', id);

  const newState = {
    ...this.state,
    todoItems: this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  };
  this.setState(newState);
};

clearComplete = () => {
  const newState = {
    ...this.state,
    todoList: this.state.todoList.filter(item => {
      return !item.completed;
    }) 
  };
  this.setState(newState);
};


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log('rendering....');
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {console.log('state.todoList from within App', this.state.todoList)}
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList 
          todoItems={this.state.todoList}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
