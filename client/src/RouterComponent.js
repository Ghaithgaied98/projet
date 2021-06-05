import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Notes from './components/Notes'

const RouterComponent = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/' component={Notes}></Route>
        </Switch>
        
            
        </BrowserRouter>
    )
}

export default RouterComponent
