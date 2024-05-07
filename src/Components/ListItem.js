import React from 'react';

function ListItem({ task, onToggle }) {

    return (
        <li
            className={task.completed ? 'completed' : ''}
            onClick={onToggle}
        >
            {task.text}
        </li>
    );
    
}

export default ListItem;

