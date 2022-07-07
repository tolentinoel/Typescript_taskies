import React from 'react';
import './App.css';
import InputField from './components/InputField';

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

  const [toDo, setToDo] = useState('');
  
  return (
    <div className="App">
      <span className="heading"> TASKIES </span>
      <InputField/>
    </div>
  );
}

export default App;
