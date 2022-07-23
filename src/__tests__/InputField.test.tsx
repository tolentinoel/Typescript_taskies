import '@testing-library/jest-dom';

import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import InputField from '../components/InputField';

describe('InputField', () => {

    it('renders input form', () => {
        render(<InputField todo='' setToDo={() => {}} handleAdd={() => {}} />)
        let inputField = screen.getByRole("textbox", { name: "task-input" });
        expect(inputField).toBeInTheDocument();
    });

    it('renders a button with the class of inputSubmit', async () => {
        render(<InputField todo='' setToDo={() => {}} handleAdd={() => {}} />)
        const primaryButton = screen.getByRole('button', { name: 'submit-button', hidden: true });
        expect(primaryButton).toHaveProperty('type', 'submit');
      })
  });