import React from 'react';
import { useState } from 'react';
import ListItem from './ListItem';

function ToDoList(){

    const [tasks, setTasks] = useState([
        { text: "Read SpringBoot 📋", completed: false },
        { text: "Complete assignments 📋", completed: false },
        { text: "Prepare breakfast 📋", completed: false },
        { text: "Sleep for 2 hours 📋", completed: false },
        { text: "Take a shower 📋", completed: false }

    ]);


    const handleTaskToggle = (index) => {

        const updatedTasks = [...tasks];

        updatedTasks[index].completed = !updatedTasks[index].completed;

        setTasks(updatedTasks);
    };
  

    const handleRemoveCompletedClick = () => {

        const updatedTasks = tasks.filter(task => !task.completed);

        setTasks(updatedTasks);

    };


  return (
    
        <div className="todo-list">
            <h2>To-Do List ⏳</h2>

            {tasks.length === 0 ?
                <p>Nothing to do buddy. Sleep! 😴</p> :
                <ul>
                   {tasks.map((task, index) => (
                        <ListItem
                            key={index}
                            task={task}
                            onToggle={() => handleTaskToggle(index)}
                        />
                    ))}
                </ul>
            }

            <button className="remove-completed-button" onClick={handleRemoveCompletedClick}>Remove Completed</button>
        </div>
    );
     
}


export default ToDoList;