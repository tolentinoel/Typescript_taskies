import './styles.css';

import * as React from 'react';

import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const ToDoList: React.FC<Props> = ({todos, setToDos}: Props) => {
  return (
    <div className="todos">
        {todos.map(todo => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setToDos={setToDos}
            />
            // <li>{todo.todo}</li>
        ))}
    </div>
  )
}

export default ToDoList