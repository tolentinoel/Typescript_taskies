import './styles.css';

import * as React from 'react';
import { useState } from 'react';

import { BiEditAlt } from 'react-icons/bi';
import {
  MdDone,
  MdDoneOutline,
} from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { Todo } from '../model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todos, setToDos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setToDos(todos.map(task =>
            task.id === id ? {...task, isDone: !task.isDone} : task))
    }

    const handleEdit = (id:number) => {

    }

    const handleDelete = (id:number) => {
        setToDos(todos.filter((todo) => todo.id !== id))
    }

  return <form className="todosSingle">
        {
            edit ? (
                <input/>
            ):(todo.isDone ? (
                    <s className="todosSingleText"> {todo.todo} </s>
                ) : (
                    <span className="todosSingleText"> {todo.todo} </span>
                ))
        }

        <div>
            <span className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone){
                            setEdit(!edit)
                        }
                    }}
                ><BiEditAlt/>
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><RiDeleteBin5Line/></span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
            {
                todo.isDone ? (
                    <MdDone/>
                ) : (
                    <MdDoneOutline/>
                )
            }
            </span>
        </div>
        </form>

}

export default SingleTodo