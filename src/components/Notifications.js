import React, {Component} from 'react'
import {Card, Col, Container} from 'reactstrap'

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

        return this.props.store.notifications.length === 0 ? blankSlate : this.props.store.queriedNotifications.length === 0 ? noMatch : notificationCards
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