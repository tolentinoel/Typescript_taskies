import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import InputField from '../components/InputField';

describe('InputField', () => {

    it('renders submit button', () => {
        render(<InputField todo='' setToDo={() => {}} handleAdd={() => {}} />)
        // render(<button></button>);
        // const submitButton = screen.getByRole('button', {name:'submit-button'});
    //   expect(submitButton).toBeInTheDocument();
    let input = screen.getByRole("textbox", { name: "task-input" });
    expect(input).toHaveValue('');
    });

    it('should render a button with the class of inputSubmit', async () => {
        render(<InputField todo='' setToDo={() => {}} handleAdd={() => {}} />)
        const primaryButton = screen.getByRole('button', { name: 'submit-button', hidden: true });
        expect(primaryButton).toHaveProperty('type', 'submit');
      })
  });