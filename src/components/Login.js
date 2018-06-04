import React, {Component} from 'react'
import {
    NavbarBrand,
    NavbarToggler,
    NavLink,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    Button,
    Col,
    Container,
    Row,
    Jumbotron,
    Form,
    Label,
    FormGroup,
    Input
} from 'reactstrap'
import {Switch, Route, Redirect, Link} from 'react-router-dom'

class Login extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {

        return (
            <div className="login">
                <Navbar color="dark" dark expand="md" className="p-3 shadow">
                    <Container>
                        <Link to="/" className="navbar-brand"><span role="img" aria-label="">🐳</span> Dockyard</Link>
                        <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})}/>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink target="_blank"
                                             href="https://github.com/bene/dockyard-server">Github</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Switch>
                                        <Route exact path="/sign_in" render={(props) => (
                                            <Link to="/" className="font-weight-bold nav-link">Sign up</Link>
                                        )}/>

                                        <Route exact path="/" render={(props) => (
                                            <Link to="/sign_in" className="font-weight-bold nav-link">Sign in</Link>
                                        )}/>
                                    </Switch>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <main role="main" className="container">
                    <Switch>
                        <Route exact path="/" component={SignUp}/>
                        <Route exact path="/sign_in" component={SignIn}/>
                        <Route render={() => (
                            <Redirect to="/"/>
                        )}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            identifier: "",
            password: ""
        }

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
    }

    render() {

        return (
            <Col sm={{size: 8, offset: 2}}>
                <Jumbotron className="bg-white shadow">
                    <h3 className="text-center">Welcome back!</h3>
                    <p className="text-center text-muted mb-4">To resume your work please log in.</p>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label>Username or Email</Label>
                            <Input type="text" value={this.state.identifier}
                                   onChange={(e) => this.setState({identifier: e.target.value})}
                                   placeholder="Enter your username or email" required/>
                        </FormGroup>

                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" value={this.state.password}
                                   onChange={(e) => this.setState({password: e.target.value})}
                                   placeholder="Enter your password" required/>
                        </FormGroup>

                        <Button color="primary" block>Sign in</Button>
                    </Form>
                </Jumbotron>
            </Col>
        )
    }
}

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            username: "",
            password: ""
        }

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
    }

    render() {

        return (
            <Row>
                <Col sm="6" className="text-md-right text-center justify-content-center d-flex flex-column pb-5">
                    <h1 className="text-white display-3">Dockyard</h1>
                    <h3 className="text-muted">Seamless CI for Docker images.</h3>
                    <h3 className="text-muted">Fast. Simple. Reliable.</h3>
                </Col>

                <Col sm="6">
                    <Jumbotron className="bg-white shadow">
                        <Form onSubmit={this.submit}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" value={this.state.username}
                                       onChange={(e) => this.setState({username: e.target.value})}
                                       placeholder="Pick a username" required/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" value={this.state.email}
                                       onChange={(e) => this.setState({email: e.target.value})}
                                       placeholder="you@example.com" required/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" value={this.state.password}
                                       onChange={(e) => this.setState({password: e.target.value})}
                                       placeholder="Enter a password" required/>
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