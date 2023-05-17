import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar Curso React', completed: false},
  {text: 'Llorar con llorona ', completed: false},
  {text: 'Lsadasdas', completed: false},
  {text: 'Lsadadadsdas', completed: false},
]


function App() {
  return (
    <>
      <TodoCounter completed={16} total={20}/>
      <TodoFilter/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ) )}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}



export default App;
