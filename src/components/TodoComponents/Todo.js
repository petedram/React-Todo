import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={event => props.toggleComplete(props.task.id)}
            className={`item${props.task.complete ? " complete" : ""}`}

        >
            {console.log('props from within Todo', props.task)}
            <p>{props.task}</p>
        </div>
    );
};

export default Todo;
