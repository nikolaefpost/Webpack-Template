import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from "./pages/home";

export const App = () => (
    <Fragment>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    </Fragment>
)