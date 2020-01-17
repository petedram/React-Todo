import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {console.log('from within TodoList', props.todoItems)}
            {props.todoItems.map(item => (
                <Todo
                    key={item.id}
                    task={item.task}
                    toggleComplete={props.toggleComplete}
                />
            ))}
            <button className='clear-btn' onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    );
};

export default TodoList;
