import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { logout, selectUser } from '../store/userSlice'
import axios from "axios";


export default function Header() {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const onLogout = () => {
        const token = localStorage.getItem('token')
        axios.delete(`${process.env.REACT_APP_API_URL}/logout`, {
          headers: {
            "Authorization": "Bearer "+token
          }
        })
        .then(() => {
            dispatch(logout())
            nav('/login');
        })
        .catch(err =>{
          console.log(err)
        })
      }
    return (
        <ul className="App-header">  
            <li>  
              <Link to="/login" onClick={onLogout}>Logout</Link>  
            </li>  
            <li>  
              <Link to="/">Dashboard</Link>  
            </li>  
        </ul>  

    )
}