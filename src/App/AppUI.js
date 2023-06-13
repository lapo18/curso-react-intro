import React from "react"
import { TodoCounter } from '../TodoCounter'
import { TodoFilter } from '../TodoFilter'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
function AppUI({completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  handleOnCompleted,
  handleOnDeleted
}){
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
export {AppUI}