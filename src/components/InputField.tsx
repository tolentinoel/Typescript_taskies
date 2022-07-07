import React from 'react';
import './styles.css';

interface Props {
    todo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({todo, setToDo, handleAdd}: Props) => {
  return <form className= "input" onSubmit={(e) => handleAdd(e)}>
            <input
                value={todo}
                onChange={(e) => setToDo(e.target.value)}
                type='input'
                placeholder="Enter task"
                className="inputBox"/>
            <button className="inputSubmit" type="submit" >Go</button>
        </form>

}

export default InputField
