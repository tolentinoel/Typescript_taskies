import './styles.css';

import * as React from 'react';

import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

// eslint-disable-next-line no-lone-blocks
{/* <div className="todos">
        {todos.map(todo => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setToDos={setToDos}
            />

        ))}
    </div> */}
const ToDoList: React.FC<Props> = ({todos, setToDos}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todosHeading">
          Active Task
        </span>
        {todos.map(todo => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setToDos={setToDos}
            />

        ))}
      </div>
      <div className="todos remove">{todos.map(todo => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setToDos={setToDos}
            />

        ))}</div>
    </div>
  )
}

export default ToDoList