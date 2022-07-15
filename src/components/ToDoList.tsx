import './styles.css';

import * as React from 'react';

import { Droppable } from 'react-beautiful-dnd';

import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const ToDoList: React.FC<Props> = ({
  todos,
  setToDos,
  completedTodos,
  setCompletedTodos
  }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {
          (provided,snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? 'dragactive': ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
              <span className="todosHeading">
                Priority Tasks:
              </span>

              {todos.map((todo, index) => (
                <SingleTodo
                  index ={index}
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setToDos={setToDos} />

              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {
          (provided, snapshot)=> (
            <div className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete': ""}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
              <span className="todosHeading">
                Non-priority Tasks:
              </span>

              {completedTodos.map((todo, index) => (
                <SingleTodo
                  isDone = {!todo.isDone ? todo.isDone: true}
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  key={todo.id}
                  setToDos={setCompletedTodos} />

              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
      </div>
  )
}

export default ToDoList