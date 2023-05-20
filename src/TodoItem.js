import './TodoItem.css'
import {BsCheckCircle} from 'react-icons/bs'
import { BsXCircle } from 'react-icons/bs'
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.completed ? 'Icon-check--active' : ''
        }`}
        onClick={props.onComplete}
      >
        <BsCheckCircle/>
      </span>
      <p
        className={`TodoItem-p ${
          props.completed && 'TodoItem-p--complete'
        }`}
      >
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <BsXCircle/>
      </span>
      
    </li>
  )
}
export { TodoItem }
