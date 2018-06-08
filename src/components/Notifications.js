import React, {Component} from 'react'
import {Card, Col, Container, Row} from 'reactstrap'

class Notifications extends Component {

    render() {

        const blankSlate = (
            <Card className="blankslate">
                <p className="h3 m-0">No Notifications</p>
            </Card>
        )

        const noMatch = (
            <Col sm="12">
                <Card className="blankslate">
                    <p className="h3 m-0">No Project found</p>
                </Card>
            </Col>
        )

        const notificationCards = (
            <Card className="mb-3 p-3 shadow-sm border-danger" key={Math.random()}>
                <p className="m-0">Build failed</p>
            </Card>
        )

        return this.props.store.notifications.length === 0 ? blankSlate : this.props.store.queriedNotifications.length === 0 ? noMatch : (
            <Row>
                <Col sm="2">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill"
                           role="tab" aria-selected="true">Unread</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill"
                           role="tab" aria-selected="false">Error</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                           role="tab" aria-selected="false">Warnings</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                           role="tab" aria-selected="false">Info</a>
                    </div>
                </Col>

                <Col sm="10">
                    {notificationCards}
                </Col>
            </Row>
        )
    }
}

class NotificationsMenu extends Component {

    render() {
        return (
            <Container>
                <div className="btn-group float-right" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-primary">Settings</button>
                </div>
            </Container>
        )
    }
}

export default {
    Menu: NotificationsMenu,
    View: Notifications
}