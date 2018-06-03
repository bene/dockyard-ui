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
                        <NavbarBrand href="/"><span role="img" aria-label="">🐳</span> Dockyard</NavbarBrand>
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

                <Navbar className="shadow-sm" color="light" light expand="md">
                    <Container>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">Run</button>
                            <button type="button" className="btn btn-outline-secondary">Build</button>
                            <button type="button" className="btn btn-outline-secondary">Test</button>
                        </div>

                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary">Release</button>
                        </div>
                    </Container>
                </Navbar>

                <main role={"main"} className={"mt-4 container"}>
                    <div className={"row"}>
                        <div className={"col-sm-4"}>
                            <div className="card border-success shadow-sm mb-3">
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

                            <div className="card border-success shadow-sm mb-3">
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

                            <div className="card border-danger shadow-sm mb-3">
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
                            <div className="shadow-sm jumbotron mb-4 bg-primary text-white rounded">
                                <Container>
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
                                </Container>
                            </div>

                            <div className="shadow-sm card">
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