import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import  'react-bootstrap-icons';
// import {  Link } from "react-router-dom";
import './Nav.css';
// import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from '../Home';
import Nav from './Nav';


function Navbar(){
    return(
        <>    
           <Router>
            <Nav />
            <nav className='navbarmenu'>
                <ul className='ulmenu'>
                <li className='navli'>  <b className='account'>Account</b> </li>
                    <br /><br/>
                    <li className='navli'><Link className='link' to='/'><i className="bi bi-ui-checks-grid"></i> &nbsp;  &nbsp;<b className='menu1'>Home</b></Link></li>
                    <li className='navli'><Link className='link' to='/Bio'><i className="bi bi-bar-chart"></i> &nbsp;  &nbsp;<b className='menu1'>Home</b></Link></li>
                    <li className='navli'><Link className='link' to='/con'><i className="bi bi-person"></i>&nbsp;  &nbsp;<b className='menu1'>Home</b></Link></li>
                    <li className='navli'><Link className='link' to='/about'><i className="bi bi-shop"></i>&nbsp;  &nbsp;<b className='menu1'>Home</b></Link></li>
                    <li className='navli'><Link className='link' to='/about'><i className="bi bi-flag-fill"></i> &nbsp;  &nbsp;<b className='menu1'>Home</b></Link></li>
                
                </ul>
                {/* A.U.E_Technology  */}
                <Routes>
                          <Route
                            index
                            element={<Home />}
                        ></Route> <Route
                        exact
                        path="/"
                        element={<Home />}
                    ></Route>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Home />}
                        ></Route>
                    </Routes>
            </nav>  
            </Router>
        </>
    );
}

// A.U.E_Technology
export default Navbar ;