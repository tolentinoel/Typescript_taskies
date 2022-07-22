import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import {
  render,
  screen,
} from '@testing-library/react';

import TodoList from '../components/ToDoList';

jest.mock('react-beautiful-dnd', () => ({
  Droppable: jest.fn(
    // params to children are `provider`, `snapshot`
    ({children}) => children({}, {})
  )
}));

// test('renders header text', () => {
//     // Arrange: prepare the environment,
//     //         render the component.
//   render(<App />);
//    // Act: try to find the expected link.
//   const linkElement = screen.getByText('TASKIES');
//     // Assert: check that required link
//     //        is indeed in the document.
//   expect(linkElement).toBeVisible();
// });


test('renders TodoList', () => {
  // Arrange: prepare the environment,
  //         render the component.
  render(<DragDropContext onDragEnd={()=> {}}>
    <TodoList todos={[]} setToDos={()=> {}} completedTodos={[]} setCompletedTodos={() => {}}/>
    </DragDropContext>);

  const todoListComponent = screen.getByRole('todoList')
  expect(todoListComponent).toBeInTheDocument();
});