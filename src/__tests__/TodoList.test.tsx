import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import TodoList from '../components/TodoList';

test("todos list", () => {
  render(
    <TodoList 
      todos={[]} 
      setToDos={()=> {}} 
      completedTodos={[]} 
      setCompletedTodos={() => {}} 
    />
  );

  const todoList =  screen.getByTestId("todolist-container");

  expect(todoList).not.toBeNull();
});