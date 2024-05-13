import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Header from './../Components/Header';


describe('Header Component', () => {
    it('should render a header with the correct title', () => {

      const { getByText } = render(<Header />);
     
      expect(getByText('To-Do App')).toBeInTheDocument();
      
    });
  });