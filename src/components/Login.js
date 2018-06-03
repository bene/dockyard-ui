import React, { Component } from 'react'
import { NavbarBrand, NavbarToggler, NavLink, Collapse, Navbar, Nav, NavItem, Button, Col, Container, Row, Jumbotron, Form, Label, FormGroup, Input } from 'reactstrap'

class Login extends Component {

    render() {

        return (
            <div className="login">
                <Navbar color="dark" dark expand="md" className="p-3 shadow">
                    <Container>
                        <NavbarBrand href="/"><span role="img" aria-label="">🐳</span> Dockyard</NavbarBrand>
                        <NavbarToggler />

                        <Collapse isOpen={ false } navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/projects">Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/notifications">Pricing</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/account" className="font-weight-bold">Sign in</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Container style={{ padding: "128px 0" }}>
                    <SignUp />
                </Container>
            </div>
        )
    }
}

class SignIn extends Component {

    render() {

        return (
            <Col sm={{ size: 8, offset: 2 }} >
                <Jumbotron className="bg-white shadow">
                    <h3 className="text-center">Welcome back!</h3>
                    <p className="text-center text-muted mb-4">To resume your work please log in.</p>
                    <Form>
                        <FormGroup>
                            <Label>Username or Email</Label>
                            <Input type="text" name="identifier" placeholder="Enter your username or email" required />
                        </FormGroup>

                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Enter your password" required />
                        </FormGroup>

                        <Button color="primary" block>Sign in</Button>
                    </Form>
                </Jumbotron>
            </Col>
        )
    }
}

class SignUp extends Component {

    render() {

        return (
            <Row>
                <Col sm="6" className="text-right justify-content-center d-flex flex-column pb-5">
                    <h1 className="text-white display-3">Dockyard</h1>
                    <h3 className="text-muted">Seamless CI for Docker images.</h3>
                    <h3 className="text-muted">Fast. Simple. Reliable.</h3>
                </Col>

                <Col sm="6">
                    <Jumbotron className="bg-white shadow">
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" name="username" placeholder="Pick a username" required />
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="you@example.com" required />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" placeholder="Enter a password" required />
                            </FormGroup>

                            <Button color="primary" block>Create Account</Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

export default Login