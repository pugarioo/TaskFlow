import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTaskView({ addFunction }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
    };

    setIsAdded(true);

    addFunction(newTask); 
    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => { 


        setIsAdded(false);
      }, 2000);
    }
  }, [isAdded]);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Task</h2>
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>


  );
}

export default AddTaskView;
