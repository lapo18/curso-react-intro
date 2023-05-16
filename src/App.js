import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tomar Curso React', completed: false},
  {text: 'Llorar con llorona ', completed: false},
  {text: 'Lsadasdas', completed: false},
  {text: 'Lsadadadsdas', completed: false},
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20}/>
      <TodoFilter/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}/>
        ) )}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}



export default App;
