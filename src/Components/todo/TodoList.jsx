
const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
     
          <div  key={i}  className="d-flex  justify-content-around  bg-info mt-3">
          <ul>
            <li className=" d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            </div>
            </li>
          </ul>
           <button className="btn btn-danger my-3"  onClick={()=>deleteTodo(i)}>Delelte</button>
           </div>
     
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-center mx-auto shadow p-3">
      <h5 className="mx-5 text-muted border">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
