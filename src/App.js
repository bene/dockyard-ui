import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

class App extends Component {
    render() {

        const authenticated = true

        return (
            <BrowserRouter>
                {authenticated ? <Dashboard/> : <Login/>}
            </BrowserRouter>
        )
    }
}

export default App
