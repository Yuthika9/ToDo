import React from 'react';
import { render, fireEvent,waitFor, getByTestId,getAllByRole} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './../Components/ToDoList';

describe('ToDoList Component', () => {
 

  it('renders tasks properly', () => {
    const { getAllByRole } = render(<ToDoList />);
    const tasks = getAllByRole('listitem');
    expect(tasks.length).toBe(5); // Assuming there are initially 5 tasks
  });


  it('renders the "Nothing to do buddy. Sleep!" message when all tasks are completed', () => {
    // Arrange
    const { getByTestId} = render(<ToDoList />);

    // Act: Mark all tasks as completed
    const taskElements = getByTestId('task');
    taskElements.forEach(task => {
      fireEvent.click(task);
    });

    // Act: Click the "Remove Completed" button
    const removeCompletedButton = getByTestId('remove-completed-button');
    fireEvent.click(removeCompletedButton);

    // Assert: Check if the "Nothing to do" message is displayed
    const messageElement = getByTestId('nothing-to-do-message');
    expect(messageElement.textContent).toBe('Nothing to do buddy. Sleep!');
  });
});
