import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './home.js';
import Search from './search.js';
import Trends from './trends.js';



class Head1 extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <>

                <div >
                    <div >
                        <div >
                            <div>Crypto Hunter</div>
                            <nav id='link'>
                                <Link to="/">Home</Link>
                                <Link to="/search">Crypto</Link>
                                <Link to="/trend">Trends</Link>
                            </nav>
                        </div>
                        <Routes>
                        <Route path="/" element={<Home />} />
                            <Route path="search" element={<Search />} />
                            <Route path="trend" element={<Trends />} />
                        </Routes>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Head1;