import './TodoItem.css'
import { TodoIcon } from '../TodoIcon'
function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span
        className={`Icon Icon-check ${
          props.completed ? 'Icon-check--active' : ''
        }`}
        onClick={props.onComplete}
      >
        <BsCheckCircle/>
      </span> */}
      <TodoIcon
        type="check"
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${
          props.completed && 'TodoItem-p--complete'
        }`}
      >
        {props.text}
      </p>
      {/* <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <BsXCircle/>
      </span> */}
      <TodoIcon
        type='delete'
        onDelete={props.onDelete}
      />
    </li>
  )
}
export { TodoItem }
