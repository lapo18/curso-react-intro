import React from 'react'
import './TodoIcon.css'
import { BsCheckCircle } from 'react-icons/bs'
import { BsXCircle } from 'react-icons/bs'

function TodoIcon(props) {
  const iconTypes = {
    check: () => (
      <BsCheckCircle
        className={'Icon-check'}
        onClick={props.onComplete}
      />
    ),
    delete: () => <BsXCircle className={'Icon-delete'} onClick={props.onDelete}/>,
  }
  return (
    <span
      className={`Icon Icon-${props.type} ${
        props.completed ? 'Icon-check--active' : ''
      }`}
    >
      {iconTypes[props.type]()}
    </span>
  )
}

export {TodoIcon}