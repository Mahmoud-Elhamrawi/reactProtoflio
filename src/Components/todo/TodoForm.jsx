import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4 ">Add a TODO</h3>

      <form onSubmit={handleSubmission} className='mx-auto text-center'>
        Title <br />
        <div className="form-group mx-auto w-75">
        <input
          type="text"
          className="form-control "
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <br />
        Content <br />
        <textarea
         className="form-control"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
        </div>
      </form>




    </div>
  );
};

export default TodoForm;
