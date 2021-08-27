import React from 'react';
import {FaTrash} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';


function Todo({text, todo, todos, setTodos}) {
    const deleteTodo = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeTodo = ()=> {
        setTodos(todos.map((el) => { 
            if(el.id===todo.id){
                return{
                    ...el, completed: !el.completed
                }
            }
            return el;
        } ))
    }
        
    return (
        <div className="todo">
            
    <button onClick ={completeTodo} className="done-btn"><FaCheck/></button>
    <button onClick={deleteTodo} className="out-btn"><FaTrash/></button>
    <li className={`todo-item ${todo.completed ? "completed" :''}`}>{text}</li>
    </div>
    );
};
export default Todo;