import React, { Component } from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class Project extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div className="App">
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Dockyard</NavbarBrand>
                        <NavbarToggler onClick={ this.toggle } />

                        <Collapse isOpen={ this.state.isOpen } navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/projects/">Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/notifications">Notifications</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/projects/">Account</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <main role={"main"} className={"mt-4 container"}>
                    <div className={"row"}>
                        <div className={"col-sm-4"}>
                            <div className="card mb-3">
                                <div className="card-header">Build complete</div>
                                <div className="card-body">
                                    <h5 className="card-title">fe01b92</h5>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className={"pr-4"}>Branch</td>
                                            <td>master</td>
                                        </tr>
                                        <tr>
                                            <td>Commit</td>
                                            <td>fe01b92</td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>bene</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">Build complete</div>
                                <div className="card-body">
                                    <h5 className="card-title">fe01b92</h5>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className={"pr-4"}>Branch</td>
                                            <td>master</td>
                                        </tr>
                                        <tr>
                                            <td>Commit</td>
                                            <td>fe01b92</td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>bene</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card text-danger mb-3">
                                <div className="card-header">Test failed</div>
                                <div className="card-body">
                                    <h5 className="card-title">fe01b92</h5>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className={"pr-4"}>Branch</td>
                                            <td>master</td>
                                        </tr>
                                        <tr>
                                            <td>Commit</td>
                                            <td>fe01b92</td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>bene</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className={"col-sm-8"}>
                            <div className="btn-group mb-4" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-outline-secondary">Run</button>
                                <button type="button" className="btn btn-outline-secondary">Build</button>
                                <button type="button" className="btn btn-outline-secondary">Test</button>
                            </div>

                            <div className="btn-group mb-4 float-right" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-outline-primary">Release</button>
                            </div>
                            <div className="jumbotron mb-4 bg-cyan text-white rounded">
                                <div className="container">
                                    <p className="h3">bene/dockyard</p>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className={"pr-4"}>Branch</td>
                                            <td>master</td>
                                        </tr>
                                        <tr>
                                            <td>Commit</td>
                                            <td>fe01b92</td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>bene</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    Logs
                                </div>
                                <div className="card-body">
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                    <p className="card-text m-0">2018/06/03 08:40:06 http: TLS handshake error from 195.154.255.242:42193</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <hr className={"mt-5"} />
                            <p className={"text-center text-muted"}>&copy; Dockyard</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Project