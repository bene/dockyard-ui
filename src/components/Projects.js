import {observer} from 'mobx-react'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Container, Row} from 'reactstrap'

@observer
class Projects extends Component {

    componentDidMount() {
        this.props.store.setQuery("")
    }

    render() {

        const blankSlate = (
            <Col sm="12">
                <Card className="blankslate">
                    <p className="h3 m-0">No Project</p>
                    <p className="h5 text-muted m-0 pt-2">Get started by creating your first project.</p>
                </Card>
            </Col>
        )

        const noMatch = (
            <Col sm="12">
                <Card className="blankslate">
                    <p className="h3 m-0">No Project found</p>
                </Card>
            </Col>
        )

        const projectCards = this.props.store.queriedProjects.map(p => (
            <Col sm="6" key={p.name}>
                <Card className="mb-4 p-5 shadow-sm border-primary">
                    <p className="h3 m-0">{p.name}</p>
                </Card>
            </Col>
        ))

        return (
            <Row>
                {this.props.store.projects.length === 0 ? blankSlate : this.props.store.queriedProjects.length === 0 ? noMatch : projectCards}
            </Row>
        )
    }
}

@observer
class ProjectsMenu extends Component {

    render() {
        return (
            <Container>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/projects/new" className="btn btn-outline-primary" role="button">New
                            Project</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                           onChange={(e) => this.props.store.setQuery(e.target.value)} value={this.props.store.query}/>
                </form>
            </Container>
        )
    }
}

export default {
    Menu: ProjectsMenu,
    View: Projects
}