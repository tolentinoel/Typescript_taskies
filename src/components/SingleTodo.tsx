import './styles.css';

import * as React from 'react';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { BiEditAlt } from 'react-icons/bi';
import {
  MdDone,
  MdDoneOutline,
} from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { Todo } from '../model';

type Props = {
    index: number,
    todo: Todo,
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>,
    isDone?: boolean,
}

const SingleTodo = ({index, todo, todos, setToDos, isDone}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setToDos(todos.map(task =>
            task.id === id ? {...task, isDone: !task.isDone} : task))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        setToDos(todos.map(task =>
            task.id === id ? {...task, todo: editTodo} : task))

        setEdit(false);
    }

    const handleDelete = (id:number) => {
        setToDos(todos.filter((todo) => todo.id !== id))
    }

    const inputRef = useRef<HTMLInputElement>(null);
    // puts the cursor back in the input element if edit state is true
    useEffect(() => {
        if(edit){
            inputRef.current?.focus();
        }
    }, [edit])



    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided, snapshot) => (
                    <form className={`todosSingle ${snapshot.draggingOver ? 'drag': ""}`}
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        >
                        {edit ? (
                            <input
                                ref={inputRef}
                                className="todosSingleText"
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                            />
                            ) : (todo.isDone ? (
                            <s className="todosSingleText"> {todo.todo} </s>
                            ) : (
                            <span className="todosSingleText"> {todo.todo} </span>
                            ))
                        }

                        <div>
                            <span className="icon"
                                    onClick={() => {
                                        //prevents you to edit a task that's already been crossed out.
                                        if (!edit && !todo.isDone){
                                            setEdit(!edit)
                                        }
                                    }}>
                                <BiEditAlt/>
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
                )
            }
        </Draggable>
    )


}

export default SingleTodo