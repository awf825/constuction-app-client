import React, { useEffect } from 'react'
import {  
    BrowserRouter as Router,  
    Routes,  
    Route
} from 'react-router-dom';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import Phases from "./components/phases/Phases"
import Procurables from "./components/procurables/Procurables"
import { connect } from "react-redux";

const App = (props: any) => {
    useEffect(() => {
        console.log('highest level props: ', props)
    }, [props])

    return (
        <Router>  
            <div className="App">  
                { props.userState.accessToken.length>0 ? <Header /> : null }
                <Routes>  
                    <Route path='/dashboard' element={<Dashboard {...props}/>} />
                    <Route path='/phases/:project_id' element={<Phases {...props}/>} />
                    <Route path='/procurables/:phase_id' element={<Procurables {...props}/>} />
                    <Route path='/' element={< Login {...props}/>}/>    
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