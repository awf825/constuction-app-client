import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { logout, selectUser } from '../store/userSlice'
import { connect } from 'react-redux';
import axios from "axios";


const Header = (props: any) => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const onLogout = () => {
        const token = props.userState.accessToken;
        axios.delete(`${process.env.REACT_APP_API_URL}/logout`, {
          headers: {
            "Authorization": "Bearer "+token
          }
        })
        .then(() => {
            dispatch(logout())
            nav('/');
        })
        .catch(err =>{
          console.log(err)
        })
      }
    return (
        <ul className="App-header">  
            <li>  
              <Link to="/" onClick={onLogout}>Logout</Link>  
            </li>  
            <li>  
              <Link to="/dashboard">Dashboard</Link>  
            </li>  
        </ul>  

    )
}

const mapStateToProps = (state: { user: { accessToken: string }; }) => {
  return {
    userState: state.user
  };
};

export default connect(mapStateToProps)(Header);