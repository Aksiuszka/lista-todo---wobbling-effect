import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todolist';
import binder from './components/binder1.png';



function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered]=useState([]);

  useEffect(()=>{
    filterHandler()
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
      setFiltered(todos.filter((todo) => todo.completed===true))
      break;
      case 'incompleted':
      setFiltered(todos.filter((todo) => todo.completed===false))
      break;
      default:  
      setFiltered(todos)
      break;
    }
  }
  return (
    
      
    <div className="App">
    <img id="binder" alt="binder" src={binder}/>

      <div className="circle"></div>
      
      <div class="form-block">
      <header>
        <h1>To-Do List</h1>
        
      </header>
      
      <Form  todos = {todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus}/>
      <TodoList filtered ={filtered} todos={todos} setTodos={setTodos}/>
      
      </div>
      <div className="glassmorphism"></div>
      <div className="glassmorphismuno"></div>
      <div className="glassmorphismduo"></div>
      <div className="glassmorphismtri"></div>
      <div className="glassmorphismqua"></div>
      <div className="glassmorphismqui"></div>
    </div>
    
  );
};

export default App;
