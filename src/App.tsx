import React, { useEffect } from 'react'
import {  
    BrowserRouter as Router,  
    Routes,  
    Route
} from 'react-router-dom';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import { connect } from "react-redux";

const App = (props: any) => {
    useEffect(() => {
        console.log('props: ', props)
    }, [props])
    return (
        <Router>  
            <div className="App">  
                { props.userState.accessToken.length>0 ? <Header /> : null }
                <Routes>  
                    <Route path='/login' element={< Login />}></Route>  
                    <Route path='/' element={< Dashboard />}></Route>    
                </Routes>  
            </div>  
        </Router> 
    )
}

const mapStateToProps = (state: { user: { accessToken: string }; }) => {
    return {
      userState: state.user
    };
};

export default connect(mapStateToProps)(App);