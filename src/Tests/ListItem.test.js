import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ListItem from './../Components/ListItem';

describe('ListItem Component', () => {

    it('should render the tasks text properly', () => {

      const task = { text: 'Test Task', completed: false };
      const { getByText } = render(<ListItem task={task} />);

      expect(getByText('Test Task')).toBeInTheDocument();

    });
  
    it('should apply "completed" class if task is completed', () => {

      const task = { text: 'Test Task', completed: true };
      const { container } = render(<ListItem task={task} />);

      expect(container.firstChild).toHaveClass('completed');
    });
  
    it('should call onToggle when clicked', () => {

      const task = { text: 'Test Task', completed: false };
      const onToggle = jest.fn();
      const { container } = render(<ListItem task={task} onToggle={onToggle} />);

      container.firstChild.click();

      expect(onToggle).toHaveBeenCalled();
      
    });
  });