import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Container, Navbar} from 'reactstrap'
import Spinner from './Spinner'

class LoadingScreen extends Component {
    render() {

        return (
            <React.Fragment>
                <Navbar color="dark" dark expand="md" className="p-3 shadow">
                    <Container>
                        <Link to="/" className="navbar-brand"><span role="img" aria-label="">🐳</span> Dockyard</Link>
                    </Container>
                </Navbar>

                <main role={"main"} className={"mt-4 container"}>
                    <Card className="shadow-sm">
                        <Spinner color="secondary" size="lg"/>
                        <h1 className="display-4 text-muted text-center mb-5">Loading Application</h1>
                    </Card>
                </main>
            </React.Fragment>
        )
    }
}

export default LoadingScreen