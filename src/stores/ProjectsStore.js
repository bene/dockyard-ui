import {action, computed, observable} from 'mobx'

class ProjectsStore {
    @observable projects = [{
        name: "bene"
    }, {
        name: "John"
    }, {
        name: "benedict"
    }]
    @observable query = ""

    @computed get queriedProjects() {
        const filter = new RegExp(this.query, "i")
        return this.projects.filter(p => !this.query || filter.test(p.name))
    }

    @action setQuery(query) {
        this.query = query
    }
}

export default new ProjectsStore()