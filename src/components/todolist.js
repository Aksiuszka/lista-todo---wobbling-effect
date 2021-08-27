import React from 'react';
import Todo from './todo';

function TodoList({todos, setTodos, filtered}) {
    return (
    <div className="todolistwrapper">
        <ul className="todo-list">{filtered.map(todo =>(
            <Todo text={todo.text} setTodos={setTodos} todos={todos} todo={todo} key={todo.id}/>
        ))}</ul>
        </div>
    );
};
export default TodoList;