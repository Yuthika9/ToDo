import React from 'react';
import { useState } from 'react';

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
  
     const handleEmptyButtonClick = () => {
        setTasks([]); // Clear the list of tasks
      };

      return (
        <div className="todo-list">
            <h2>To-Do List ⏳</h2>
            {tasks.length === 0 ?
                <p>Nothing to do buddy. Sleep! 😴 </p> :
                <ul>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className={task.completed ? 'completed 👍🏻 ' : ''}
                            onClick={() => handleTaskToggle(index)}
                        >
                            {task.text}
                        </li>
                    ))}
                </ul>
            }
            <button className="empty-button" onClick={handleEmptyButtonClick}>Empty</button>
        </div>
    );

      
}


export default ToDoList;