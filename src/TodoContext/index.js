import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({children}){
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos =
    todos.filter((todo) => !!todo.completed === true).length // !! is used to be sure to.completed is a boolean value
  const totalTodos = todos.length
  
  const searchedTodos =
    todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase() //variable declared to more readability
      const searchedText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchedText) // * here is more readable than using tolowercase() in the same lane
    })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const indexTodo = todos.findIndex((todo)=>(todo.text===text))
    console.log(indexTodo)
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const indexTodo = todos.findIndex((todo) => todo.text === text)
    console.log(indexTodo)
    newTodos.splice(indexTodo, 1)
    console.log(newTodos) 
    saveTodos(newTodos)
  }
  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider} 