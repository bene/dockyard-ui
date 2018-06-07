import {computed, observable} from 'mobx'

class NotificationsStore {

    @observable
    notifications = []

    @observable
    query = ""

    @computed get queriedNotifications() {
        const filter = new RegExp(this.query, "i")
        return this.notifications.filter(n => !this.query || filter.test(n.origin) || filter.test(n.type))
    }
}

export default new NotificationsStore()