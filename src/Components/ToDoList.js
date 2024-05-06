import React from 'react';
import { useState } from 'react';

function ToDoList(){
    const [tasks,setTasks] = useState([
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower"
      ]);
  
     const handleEmptyButtonClick = () => {
        setTasks([]); // Clear the list of tasks
      };

      return (
        <div className="todo-list">
          <h2>To-Do List</h2>
           { tasks.length === 0 ? 
           <p>Nothing to do buddy. Sleep!</p>:
            (<ul>
              {tasks.map((task, index) => (
                <li key={index} >{task}</li>
              ))}
            </ul>)}

            <button className = "empty-button" onClick={handleEmptyButtonClick}>Empty</button>
        </div>
      );

      
}


export default ToDoList;