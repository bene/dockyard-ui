import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import {
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from 'reactstrap'
import {AuthenticationStore} from "../stores/AuthenticationStore"
import notificationsStore from '../stores/NotificationsStore'
import projectsStore from '../stores/ProjectsStore'
import Notifications from "./Notifications"
import Project from "./Project"
import Projects from './Projects'
import ProjectsNew from "./ProjectsNew"

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {

        return (
            <React.Fragment>
                <Navbar color="dark" dark expand="md" className="p-3">
                    <Container>
                        <Link to="/" className="navbar-brand"><span role="img" aria-label="">🐳</span> Dockyard</Link>
                        <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})}/>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/projects">Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/notifications">Notifications</Link>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {this.props.session.user.username}
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.props.session.logout}>
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Navbar className="shadow-sm" color="light" light expand="md">
                    <Switch>
                        <Route exact path="/(projects|)" render={(props) => (
                            <Projects.Menu store={projectsStore}/>
                        )}/>
                        <Route exact path="/projects/new" render={(props) => (
                            <ProjectsNew.Menu store={projectsStore}/>
                        )}/>
                        <Route exact path="/project/:projectId" render={(props) => (
                            <Project.Menu store={projectsStore}/>
                        )}/>
                        <Route exact path="/notifications" render={(props) => (
                            <Notifications.Menu store={notificationsStore}/>
                        )}/>
                    </Switch>
                </Navbar>

                <main role={"main"} className={"mt-4 container"}>
                    <Switch>
                        <Route exact path="/(projects|)" render={(props) => (
                            <Projects.View store={projectsStore}/>
                        )}/>
                        <Route exact path="/projects/new" render={(props) => (
                            <ProjectsNew.View store={projectsStore}/>
                        )}/>
                        <Route exact path="/project/:projectId" render={(props) => (
                            <Project.View store={projectsStore}/>
                        )}/>
                        <Route exact path="/notifications" render={(props) => (
                            <Notifications.View store={notificationsStore}/>
                        )}/>
                        <Route exact path="/user/logout" render={(props) => {
                            this.props.session.logout()
                            return <div/>
                        }}/>
                        <Route exact path="/user/(login|create)" render={() => (
                            <Redirect to="/"/>
                        )}/>
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

Dashboard.propTypes = {
    session: PropTypes.instanceOf(AuthenticationStore)
}

export default Dashboard