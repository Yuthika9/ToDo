import React from 'react';

function ToDoList(){
    const tasks = [
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower"
      ];
  

    return(
        <div className = "todo-list">
            <h2>
                <ul>
                    {tasks.map((task,index) => (
                        <ToDoItem key={index} task={task}/>
                    ))}
                    
                </ul>
            </h2>
        </div>
    );
}

function ToDoItem({ task }) {
    return <li>{task}</li>;
  }

export default ToDoList;