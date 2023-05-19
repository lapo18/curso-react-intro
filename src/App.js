import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoFilter } from './TodoFilter'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar Curso React', completed: false },
  { text: 'Llorar con llorona ', completed: false },
  { text: 'Lsadasdas', completed: false },
  { text: 'Lsadadadsdas', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')


  const completedTodos = todos.filter(
    (todo) => todo.completed === true
  ).length
  const totalTodos = todos.length
  
  const searchedTodos = defaultTodos.filter(
    (todo) => {
    const todoText = todo.text.toLocaleLowerCase() //variable declared to more readability
    const searchedText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchedText) // * here is more readable than using tolowercase() in the same lane
  })

  console.log('Los usuarios buscan TODOS de ' + searchValue)
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoFilter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
