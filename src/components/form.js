import React from 'react';
import {FaPlus} from 'react-icons/fa'


const Form = ({setInputText, inputText, todos, setTodos, status, setStatus})  =>{
    const inputTextHandler = (e) =>{
        
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
        setInputText("");
    };
    const statusHandler =(e)=>{
        setStatus(e.target.value)
    }
    return(
        /* Tu zaczyna się cały formularz*/
        <form>
           {/* tu zaczyna się okienko do wpisywania to dosów */}
           <div className="inputsegment">
           
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-btn" type="submit"><FaPlus/></button>
            </div>
            <div className="selector">
                <select onChange={statusHandler} className="filter">
                
                    <option value="all">Wszystkie</option>
                    
                    <option value="completed">Ukończone</option>
                    <option value="incompleted">Nieukończone</option>
                </select>
            </div>
        </form>
    );
};
export default Form;