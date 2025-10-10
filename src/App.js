import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/logo.png';
import AddTaskView from './components/AddTaskView';



function App() {
  const addTask = (task) => {
    console.log("Task added:", task);
    alert(`✅ Task Added!\n\nTitle: ${task.title}\nPriority: ${task.priority}`);
  };
  return (
    <Router>
      <div className="App">     
      <AddTaskView addTask={addTask} />
    
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed='top' className='rounded-0'>   
          <Container className="d-flex justify-content-around align-items-center">
            <Navbar.Brand>
              <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
              TaskFlow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                <Nav.Link as={Link} to='/add_task' >Add Task</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main className="main-content">
        </main>
      </div>
    </Router>
  );
}


export default App;
