import {configure} from 'mobx'
import {observer} from "mobx-react/index"
import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import LoadingScreen from "./components/LoadingScreen"
import Login from "./components/Login"
import AuthenticationStore from "./stores/AuthenticationStore"
import Status from "./stores/Status"

configure({
    enforceActions: true
})

@observer
class App extends Component {

    render() {

        document.body.classList.toggle('login-screen', !AuthenticationStore.authenticated)

        return (
            <BrowserRouter>
                {AuthenticationStore.status === Status.DONE ? AuthenticationStore.authenticated ? <Dashboard session={ AuthenticationStore }/> :
                    <Login/> :
                    <LoadingScreen/>}
            </BrowserRouter>
        )
    }
}

export default App
