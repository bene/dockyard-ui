import React, {Component} from 'react'

class ProjectCreate extends Component {

    render() {

        return (
            <h1>Create new Project</h1>
        )
    }
}

class ProjectCreateMenu extends Component {

    render() {

        return (
            <div>
                <div className="btn-group" role="group" aria-label="Cancel">
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </div>
        )
    }
}

export {ProjectCreateMenu}
export default ProjectCreate