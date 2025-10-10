import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function TaskListView({ tasks, deleteTask }) {
  return (
    <Container className="mt-5 pt-4">
      <h2 className="mb-4 text-center">📋 Task List</h2>

      <div className="table-responsive">
        <Table striped bordered hover className="align-middle">
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
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
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
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
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
