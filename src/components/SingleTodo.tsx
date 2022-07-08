import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';
import { Todo } from '../model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todos, setToDos}: Props) => {
  return <form>{todo.todo} <BiEditAlt/> </form> //47:17

}

export default SingleTodo