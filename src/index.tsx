import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,
  useNavigate
} from 'react-router-dom';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import axios from "axios";
import Header from "./components/Header"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isLoggedIn = () => {
  return localStorage.getItem('token');
}

root.render(

  <Router>  
    <div className="App">  
      { isLoggedIn() ? <Header/> : null }
      <Routes>  
            <Route path='/login' element={< Login />}></Route>  
            <Route path='/' element={< Dashboard />}></Route>    
      </Routes>  
    </div>  
  </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
