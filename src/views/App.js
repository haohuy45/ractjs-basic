import logo from './logo.svg';
import './App.scss'
import TodoListComponent from './TodoApp/TodoListComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from './Nav/NavbarComponent';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Example/Home';
import MyComponent from './Example/MyComponent';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
function App() {
  return (
    <Router>

    <div className="App">
      <NavbarComponent/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <TodoListComponent/> */}


      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <TodoListComponent />
          </Route>
          <Route path="/contact">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
      </header>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
    </div>
    </Router>
  );
}

export default App;
