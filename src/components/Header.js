import React, {Component}  from 'react'; // destructuring
import logo from '../logo.svg';

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo"></img>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#" className="menu__links">Feed</a>
                            </li>
                            <li>
                                <a href="#" className="menu__links">Profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


/*
React is the default export from the react package, whereas Component is a named export in that package. You can either do

import React from 'react';
class MyClass extends React.Component { ... }

or

import React, { Component } from 'react';
class MyClass extends Component { ... }

*/
