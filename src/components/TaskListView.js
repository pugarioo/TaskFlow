import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function TaskListView({ tasks, deleteTask }) {
  return (
    <Container className="pt-4">
      <h2 className="mb-4 text-center">Task List</h2>

      <div className="table-responsive">
        <Table className="modern-card-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={task.id} className="task-card">
                  <td data-label="Task #">{index + 1}</td>
                  <td data-label="Title">{task.title}</td>
                  <td data-label="Description">{task.description}</td>
                  <td data-label="Priority">
                    <span
                      className={`badge ${
                        task.priority === 'High'
                          ? 'bg-danger'
                          : task.priority === 'Medium'
                          ? 'bg-warning text-dark'
                          : 'bg-success'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td data-label="Action">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                      className="delete-btn"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted no-tasks">
                  No tasks available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default TaskListView;
