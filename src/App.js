import React from 'react';


const tofoItems = [
  {
    task: 'complete this app',
    id: 123456,
    completed: false
},

{
  task: 'pick up milk',
  id: 123457,
  complete: false
}
];




class App extends React.Component {
  // you will need a place to store your state in this component.
state = {
  todoList: todoItems,
};


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
      </div>
    );
  }
}

export default App;
