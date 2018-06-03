import React, { Component } from 'react'

class Project extends Component {

    render() {

        return (
            <div className="App">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Dockyard</a>
                        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Notifications</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

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