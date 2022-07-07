import React from 'react';
import './styles.css';

const InputField = () => {
  return <form className= "input">
            <input type='input' placeholder="Enter task" className="inputBox"/>
            <button className="inputSubmit" type="submit">Go</button>
        </form>
  
}

export default InputField
