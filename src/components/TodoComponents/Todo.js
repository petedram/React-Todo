import React from 'react';

const Todo = props => {
    console.log('within Todo', props)
    return (
        <div
            onClick={event => props.toggleComplete(props.task.id)}
            // className={`item${props.completed}`} 'completed'
        >
            {console.log('props from within Todo', props.task, props)}
            <p>{props.task}</p>
        </div>
    );
};

export default Todo;
