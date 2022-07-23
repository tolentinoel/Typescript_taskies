import './App.css';

import React, { useState } from 'react';

import {
  DragDropContext,
  DropResult,
} from 'react-beautiful-dnd';

import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './model';

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]; //tuple

// let printName: (name: string) => void;
// //void returns undefined, never does not return anything
// interface Person {
//   name: string,
//   age: number
// }

// interface Human extends Person{
//   profession: string;

// }

// type X = {
//   name: string,
//   age: number
// }

// type Y = X & {
//   surname: string,
//   birthYear: number
// }

// let human: Y = {
//   surname: "Tolentino",
//   birthYear: 1992,
//   // extended type requires all properties when initialized
//   name: 'Ellaine',
//   age: 30
// }

// let person: Person = {
//   name: 'Ellaine',
//   age: 30
// }

// let lotsOfPeople: Person[];

// let personInfo: unknown; //recommended instead of using any

const App: React.FC = () => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [todo, setToDo] = useState<string>('');
  const [todos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setToDos([...todos, {id: Date.now(), todo , isDone: false}])

    }
    setToDo("");
  };

  const onDragEnd = (result:DropResult) => {
    const {source, destination} = result;

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    let add,
    active = todos,
    complete = completedTodos;

    if(source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setToDos(active);
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading"> TASKIES </span>
        <InputField todo={todo} setToDo= {setToDo} handleAdd={handleAdd}/>
        <ToDoList
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          todos={todos}
          setToDos= {setToDos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;

