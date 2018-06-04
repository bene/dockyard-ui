import React, {Component} from 'react'
import Project, {ProjectMenu} from "./Project"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import Projects, {ProjectsMenu} from "./Projects";
import Notifications from "./Notifications";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {

        return (
            <div>
                <Navbar color="dark" dark expand="md" className="p-3">
                    <Container>
                        <NavbarBrand href="/"><span role="img" aria-label="">🐳</span> Dockyard</NavbarBrand>
                        <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})}/>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/projects">Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/notifications">Notifications</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/account">Account</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Navbar className="shadow-sm" color="light" light expand="md">
                    <Container>
                        <ProjectsMenu/>
                    </Container>
                </Navbar>

                <main role={"main"} className={"mt-4 container"}>

                    <Project/>

                    <div className={"row"}>
                        <div className={"col-12"}>
                            <hr className={"mt-5"}/>
                            <p className={"text-center text-muted"}>&copy; Dockyard</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard