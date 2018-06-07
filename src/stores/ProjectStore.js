import {observable} from 'mobx'

class ProjectStore {
    @observable name = ""
    @observable branch = ""
    @observable commit = ""
    @observable author = ""
    @observable log = []
    @observable notifications = []
}

export default new ProjectStore()