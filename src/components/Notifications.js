import React, {Component} from 'react'
import {Card} from 'reactstrap'

class Notifications extends Component {

    render() {

        const blankSlate = (
            <Card className="blankslate">
                <p className="h3 m-0">No Notifications</p>
            </Card>
        )

        const notificationList = (
            <Card className="mb-3 p-3 shadow-sm border-danger" key={Math.random()}>
                <p className="m-0">Build failed</p>
            </Card>
        )

        return blankSlate
    }
}

export default Notifications