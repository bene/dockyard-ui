import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import {
    Button,
    Col,
    Collapse,
    Container,
    Form,
    FormGroup,
    Input,
    Jumbotron,
    Label,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Row
} from 'reactstrap'
import AuthenticationStore from "../stores/AuthenticationStore"

class Login extends Component {

    state = {
        isOpen: false
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
                                        <Route exact path="/user/login" render={(props) => (
                                            <Link to="/user/create" className="font-weight-bold nav-link">Sign up</Link>
                                        )}/>

                                        <Route exact path="/user/create" render={(props) => (
                                            <Link to="/user/login" className="font-weight-bold nav-link">Sign in</Link>
                                        )}/>
                                    </Switch>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <main role="main" className="container">
                    <Row>
                        <Col sm="6"
                             className="text-md-right text-center justify-content-center d-flex flex-column pb-5">
                            <h1 className="text-white display-3">Dockyard</h1>
                            <h3 className="text-muted">Seamless CI for Docker images.</h3>
                            <h3 className="text-muted">Fast. Simple. Reliable.</h3>
                        </Col>
                        <Col sm="6">
                            <Jumbotron className="bg-white shadow">
                                <Switch>
                                    <Route exact path="/user/create" component={SignUp}/>
                                    <Route exact path="/user/login" component={SignIn}/>
                                    <Route render={() => (
                                        <Redirect to={localStorage.getItem('KNOWN') ? "/user/login" : "/user/create"}/>
                                    )}/>
                                </Switch>
                            </Jumbotron>
                        </Col>
                    </Row>
                </main>
            </div>
        )
    }
}

class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                identifier: "",
                password: ""
            }
        }

        this.submit = this.submit.bind(this)
    }

    submit(e) {

        e.preventDefault()

        AuthenticationStore.signIn(this.state.form).catch((err) => {
            this.setState({
                errorMessage: err.message
            })
        })
    }

    render() {

        const {errorMessage} = this.state

        const errorAlert = (
            <div className="alert alert-danger" role="alert">
                {errorMessage ? errorMessage : ""}
            </div>
        )

        return (
            <React.Fragment>
                <h3 className="text-center">Welcome back!</h3>
                <p className="text-center text-muted mb-4">To resume your work please log in.</p>
                {errorMessage ? errorAlert : null}
                <Form onSubmit={this.submit}>
                    <FormGroup>
                        <Label>Username or Email</Label>
                        <Input type="text" value={this.state.form.identifier}
                               onChange={(e) => this.setState({
                                   form: {
                                       ...this.state.form,
                                       identifier: e.target.value
                                   }
                               })}
                               placeholder="Enter your username or email" required minLength="3"/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" value={this.state.form.password}
                               onChange={(e) => this.setState({
                                   form: {
                                       ...this.state.form,
                                       password: e.target.value
                                   }
                               })}
                               placeholder="Enter your password" required minLength="6"/>
                    </FormGroup>

                    <Button color="primary" block>Sign in</Button>
                </Form>
            </React.Fragment>
        )
    }
}

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: "",
                username: "",
                password: ""
            }
        }

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()

        AuthenticationStore.signUp(this.state.form).catch((err) => {
            this.setState({
                errorMessage: err.message
            })
        })
    }

    render() {

        const {errorMessage} = this.state

        const errorAlert = (
            <div className="alert alert-danger" role="alert">
                {errorMessage ? errorMessage : ""}
            </div>
        )

        return (


            <React.Fragment>
                {errorMessage ? errorAlert : null}
                <Form onSubmit={this.submit}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" value={this.state.form.username}
                               onChange={(e) => this.setState({
                                   form: {
                                       ...this.state.form,
                                       username: e.target.value
                                   }
                               })}
                               placeholder="Pick a username" minLength="3" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" value={this.state.form.email}
                               onChange={(e) => this.setState({
                                   form: {
                                       ...this.state.form,
                                       email: e.target.value
                                   }
                               })}
                               placeholder="you@example.com" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" value={this.state.form.password}
                               onChange={(e) => this.setState({
                                   form: {
                                       ...this.state.form,
                                       password: e.target.value
                                   }
                               })}
                               placeholder="Enter a password" minLength="6" required/>
                    </FormGroup>

                    <Button color="primary" block>Create Account</Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default Login