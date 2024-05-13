import React from 'react';
import { render,fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './../Components/ToDoList';

describe('ToDoList Component', () => {

  it('should render the tasks properly', () => {
    //Arrange
    const { getAllByRole } = render(<ToDoList />);
    const tasks = getAllByRole('listitem');

    //Assert
    expect(tasks.length).toBe(5); // Assuming there are initially 5 tasks
  });


  it('should render all tasks properly', () => {

    // Arrange: Render the ToDoList component with tasks
    const tasks = [
      { text: "Read SpringBoot 📋", completed: false },
      { text: "Complete assignments 📋", completed: false },
      { text: "Prepare breakfast 📋", completed: false },
      { text: "Sleep for 2 hours 📋", completed: false },
      { text: "Take a shower 📋", completed: false }
    ];
    const { getByText } = render(<ToDoList tasks={tasks} />);

    // Assert: Check if all tasks are rendered
    tasks.forEach(task => {
      expect(getByText(task.text)).toBeInTheDocument();
    });

  });


  it('should toggle task completion properly', () => {

    // Arrange: Render the ToDoList component with tasks
    const tasks = [
        { text: "Read SpringBoot 📋", completed: false },
        { text: "Complete assignments 📋", completed: false },
        { text: "Prepare breakfast 📋", completed: false },
        { text: "Sleep for 2 hours 📋", completed: false },
        { text: "Take a shower 📋", completed: false }
      ];
      const { getByText, rerender } = render(<ToDoList tasks={tasks} />);

      // Act: Click on the task to toggle completion
      fireEvent.click(getByText(tasks[0].text));
  
      // Assert: Check if the task is completed by rerendering the component
      rerender(<ToDoList tasks={tasks} />);
      const updatedTasks = tasks.map(task => task.text === "Read SpringBoot 📋" ? { ...task, completed: true } : task);
  
      expect(updatedTasks[0].completed).toBe(true);

  });

  it('should remove toggled tasks properly when the custom button is clicked', async () => {

    // Arrange: Render the ToDoList component with tasks
    const tasks = [
        { text: "Read SpringBoot 📋", completed: false },
        { text: "Complete assignments 📋", completed: false },
        { text: "Prepare breakfast 📋", completed: false },
        { text: "Sleep for 2 hours 📋", completed: false },
        { text: "Take a shower 📋", completed: false }
      ];
    const { getByText, queryByText, getByTestId } = render(<ToDoList tasks={tasks} />);

    // Act: Toggle the completion of Tasks
    fireEvent.click(getByText('Read SpringBoot 📋'));
    fireEvent.click(getByText('Complete assignments 📋'));

    // Act: Click thebutton to remove toggled tasks
    fireEvent.click(getByTestId('remove'));

    // Assert: Check if toggled tasks are removed
    await waitFor(() => {
      expect(queryByText('Read SpringBoot 📋')).toBeNull();
      expect(queryByText('Complete assignments 📋')).toBeNull();
    });

    // Assert: Check if untoggled tasks remain
    expect(queryByText('Prepare breakfast 📋')).toBeInTheDocument();
  });

  it('should display "Nothing to do buddy! Sleep" message when all tasks are removed', async () => {
    // Arrange: Render the ToDoList component with initial tasks
    const tasks = [
      { text: "Read SpringBoot 📋", completed: false },
      { text: "Complete assignments 📋", completed: false },
      { text: "Prepare breakfast 📋", completed: false },
      { text: "Sleep for 2 hours 📋", completed: false },
      { text: "Take a shower 📋", completed: false }
    ];
    const { getByText, queryByText, getByRole } = render(<ToDoList tasks={tasks} />);

    const toggleAndRemoveTasks = async () => {

        for (let i = 0; i < tasks.length; i++) {
          fireEvent.click(getByText(tasks[i].text)); // Toggle the task
          await waitFor(() => {}); // Wait for rerender
        }
  
        const removeCompletedButton = getByRole('button', { name: 'Remove Completed' });
        fireEvent.click(removeCompletedButton); // Remove completed tasks
        await waitFor(() => {}); // Wait for rerender

    };
  
    await toggleAndRemoveTasks(); // Toggle and remove all tasks
  
      // Assert: Check if the "Nothing to do buddy! Sleep" message is displayed
    expect(queryByText('Nothing to do buddy. Sleep! 😴')).toBeInTheDocument();
    
  });

});
