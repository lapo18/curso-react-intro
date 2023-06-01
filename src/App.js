import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoFilter } from './TodoFilter'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos 
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1)',JSON.stringify([]))
    parsedTodos = []

  }
  else
  {
    parsedTodos= JSON.parse(localStorageTodos)
  }
  console.log(parsedTodos)
  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const completedTodos =
    todos.filter((todo) => !!todo.completed === true).length // !! is used to be sure to.completed is a boolean value
  
  const totalTodos = todos.length
  
  const searchedTodos =
    todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase() //variable declared to more readability
      const searchedText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchedText) // * here is more readable than using tolowercase() in the same lane
    })

  const handleOnCompleted = (text) => {
    const newTodos = [...todos]
    const indexTodo = todos.findIndex((todo)=>(todo.text===text))
    console.log(indexTodo)
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed
    saveTodos(newTodos)
  }
  
  const handleOnDeleted = (text) => {
    const newTodos = [...todos]
    const indexTodo = todos.findIndex((todo) => todo.text === text)
    console.log(indexTodo)
    newTodos.splice(indexTodo, 1)
    console.log(newTodos) 
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
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
            onComplete={()=>handleOnCompleted(todo.text)}
            onDelete={()=>handleOnDeleted(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App
