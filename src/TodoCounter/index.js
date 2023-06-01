import './TodoCounter.css'

function TodoCounter({total,completed}){
  if (total === 0)
    return (
      <h1 className="TodoCounter">
        Todavia no tienes <span>TODOs</span> para completar
      </h1>
    )
  return total === completed ? (
    <h1 className="TodoCounter">
      Felicidades has completado todos tus <span>TODOs</span>
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de{' '}
      <span>{total}</span> TODOs
    </h1>
  )
}
export {TodoCounter};