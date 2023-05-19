import React from 'react'
import './TodoFilter.css'

function TodoFilter(props) {

  return (
    <input 
      placeholder='Cortar cebollas'
      className="TodoFilter"
      value={props.searchValue}
      onChange={
        (event) => {
          props.setSearchValue(event.target.value)
        }
      }
    />
  )
}

export {TodoFilter};
