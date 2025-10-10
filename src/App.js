import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/logo.png';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  // ✅ Global task state (Task 3 responsibility)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Need to complete laboratory 2", description: "Finish Task 5 today", priority: "High" },
    { id: 2, title: "Push branch", description: "Check pull requests", priority: "Medium" },
    { id: 3, title: "House chores", description: "Clean the house", priority: "Low" },
  ]);


  const addTask = (taskDetails) => {
    const newTask = {
      id: tasks.length + 1,
      ...taskDetails,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); 
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
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/add_task">Add Task</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main className="main-content">
          <Routes>
            {/* Home page: display list of tasks */}
            <Route path="/" element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} />
            {/* Add task page: use addTask function */}
            <Route path="/add_task" element={<AddTaskView addFunction = {addTask}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
