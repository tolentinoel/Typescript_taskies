import React, { useRef } from 'react';
import './styles.css';

interface Props {
    todo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({todo, setToDo, handleAdd}: Props) => {
   const inputRef = useRef<HTMLInputElement>(null);

  return <form className= "input" onSubmit={(e) => {
    handleAdd(e)
    inputRef.current?.blur()
    }}>
            <input
                ref={inputRef}
                value={todo}
                onChange={(e) => setToDo(e.target.value)}
                type='input'
                placeholder="Enter task"
                className="inputBox"/>
            <button className="inputSubmit" type="submit" >Go</button>
        </form>

}

export default InputField
