import {observable} from 'mobx'

class ProjectsStore {
    @observable projects = []
    @observable query = ""
}