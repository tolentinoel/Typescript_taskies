import './styles.css';

import React, { useRef } from 'react';

interface Props {
    todo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setToDo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <form className= "input" onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.focus();
                }}>
                <input
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => setToDo(e.target.value)}
                    type='input'
                    placeholder="Enter task"
                    className="inputBox"
                />
                <button className="inputSubmit" type="submit">Go</button>
            </form>

}

export default InputField
