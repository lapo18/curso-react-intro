import React from "react"
import { TodoCounter } from '../TodoCounter'
import { TodoFilter } from '../TodoFilter'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from "../TodoContext"

function AppUI(){
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoFilter/>

      <TodoContext.Consumer>
        {(
          {loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,}
        )=>(
          <TodoList>
          {loading &&( 
          <>
          <TodosLoading/> 
          <TodosLoading/> 
          <TodosLoading/>
          </>) }
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
          
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />
          ))}
        </TodoList>
        )}
      </TodoContext.Consumer>
      

      <CreateTodoButton />
    </React.Fragment>
  )
}
export {AppUI}