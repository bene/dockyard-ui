import React, {Component} from 'react'

class Spinner extends Component {

    render() {

        let color

        switch (this.props.color) {
            case "primary":
                color = "bg-primary"
                break
            case "secondary":
                color = "bg-secondary"
                break
            default:
                color = ""
        }

        let size

        switch (this.props.size) {
            case "lg":
                size = {
                    height: "80px",
                    width: "80px"
                }
                break
            case "sm":
                size = {
                    height: "20px",
                    width: "20px"
                }
                break
            default:
                size = {
                    height: "40px",
                    width: "40px"
                }
        }

        return (
            <div className="spinner">
                <div className={`double-bounce1 ${color}`} style={{...size}}></div>
                <div className={`double-bounce2 ${color}`} style={{...size}}></div>
            </div>
        )
    }
}

export default Spinner