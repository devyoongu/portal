import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Main from "../Pages/Main/Main";
import Tech from "../Pages/Tech/Tech";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/tech" component={Tech} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}