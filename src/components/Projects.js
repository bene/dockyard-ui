import React, { Component } from 'react'
import { Card, Row, Col } from 'reactstrap'

class Projects extends Component {

    render() {

        return (
            <Row>
                <Col sm="6">
                    <Card className="mb-4 p-5 shadow-sm border-primary">
                        <p className="h3 m-0">bene/dockyard</p>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card className="mb-4 p-5 shadow-sm border-primary">
                        <p className="h3 m-0">bene/pipely</p>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card className="mb-4 p-5 shadow-sm border-primary">
                        <p className="h3 m-0">bene/wetube</p>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card className="mb-4 p-5 shadow-sm border-primary">
                        <p className="h3 m-0">bene/gitea</p>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card className="mb-4 p-5 shadow-sm border-primary">
                        <p className="h3 m-0">bene/gateway</p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

class ProjectsMenu extends Component {

    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-primary">New Project</button>
                </div>
            </div>
        )
    }
}

export { ProjectsMenu }
export default Projects