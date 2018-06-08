import {action, computed, observable} from 'mobx'

class ProjectsStore {

    @observable
    projects = []

    @observable
    query = ""

    @computed
    get queriedProjects() {
        const filter = new RegExp(this.query, "i")
        return this.projects.filter(p => !this.query || filter.test(p.name))
    }

    @action
    setQuery(query) {
        this.query = query
    }
}

export default new ProjectsStore()