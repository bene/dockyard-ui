import {observer} from 'mobx-react'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap'

@observer
class ProjectsNew extends Component {

    render() {

        return (
            <Row>
                <Col sm={{size: 12}}>
                    <Card>
                        <CardBody>
                            <p className="h3">Create a new Project</p>
                            <hr/>
                            <Form>
                                <FormGroup row>
                                    <Label sm={3}>Project Name</Label>
                                    <Col sm={9}>
                                        <Input type="text" placeholder="Enter a name"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>Access</Label>
                                    <Col sm={9}>
                                        <Input type="select">
                                            <option>Public</option>
                                            <option>Private</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>Description</Label>
                                    <Col sm={9}>
                                        <Input type="textarea"/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

class ProjectsNewMenu extends Component {

    render() {
        return (
            <Container>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/projects" className="btn btn-outline-danger" role="button">Cancel</Link>
                    </li>
                </ul>

                <div className="btn-group float-right" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Next</button>
                </div>
            </Container>
        )
    }
}

export default {
    Menu: ProjectsNewMenu,
    View: ProjectsNew
}