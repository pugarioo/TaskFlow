import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/logo.png';
import TaskListView from './components/TaskListView';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "need to complete laboratory 2", description: "Finish Task 5 today", priority: "High" },
    { id: 2, title: "Push branch", description: "Check pull requests", priority: "Medium" },
    { id: 3, title: "house chores", description: "clean the house", priority: "Low" },

  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed="top" className="rounded-0">
          <Container className="d-flex justify-content-around align-items-center">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />{' '}
              TaskFlow
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/add_task">Add Task</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main className="main-content">
          <Routes>
            <Route
              path="/home"
              element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
            />
            <Route
              path="/add_task"
              element={<p className="mt-5 pt-5 text-center">Add Task Page (coming soon)</p>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
