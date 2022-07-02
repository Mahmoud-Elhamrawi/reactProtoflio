import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todo.css';
import { useDispatch,useSelector } from 'react-redux';
import { addTodoAction ,deleteTodo} from "../../";



function Todo() {
  let todos = useSelector(x => x.todos)

  let dispatch  = useDispatch()
  const addTodo = (task) => {
    console.log(task);
    dispatch(addTodoAction(task))
  };

  const deleteTodo = (index) => {
     dispatch( (index))
  }

  return (
    <div className="text-center py-2 todo-wrapper  container">
      <TodoForm addTodo={addTodo} />
      <TodoList  todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
