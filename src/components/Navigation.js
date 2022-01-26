import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom';
import App from '../App';
import AboutMe from '../pages/AboutMe';


export default function Navigation(){

    return (
        <>
        Navigation portion  <br />
        
        <Router>
            <Link to="/"> 
                Home
            </Link>

            <Link to="/about">
                About
            </Link>
        </Router>
        


       <Routes>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/about">
                <AboutMe />
            </Route>
        </Routes>
        
        </>
    );

}