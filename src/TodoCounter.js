function TodoCounter(props){
  return(
    <h1>
      Has completado
      {props.completed} de
      {props.total} TODOs
    </h1>
  );
}
export {TodoCounter};