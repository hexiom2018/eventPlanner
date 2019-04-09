import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from "./history";
import FirstScreen from '../src/screens/firstScreen/FirstScreen'

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={FirstScreen} />
                </div>
            </Router>
        )
    }
}

export default Routers;