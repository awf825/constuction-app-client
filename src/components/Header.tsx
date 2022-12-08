import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";


export default function Header() {
    const nav = useNavigate();
    const logout = () => {
        console.log('logout')
        const token = localStorage.getItem('token')
        axios.delete(`${process.env.REACT_APP_API_URL}/logout`, {
          headers: {
            "Authorization": "Bearer "+token
          }
        })
        .then(resp => {
            localStorage.removeItem('token')
            alert('Logged out;')
            nav('/login');
        })
        .catch(err =>{
          console.log(err)
        })
      }
    return (
        <ul className="App-header">  
            <li>  
            <Link to="/login" onClick={logout}>Logout</Link>  
            </li>  
            <li>  
            <Link to="/dashboard">Dashboard</Link>  
            </li>  
        </ul>  

    )
}