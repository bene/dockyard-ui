import {action, observable, runInAction} from 'mobx'
import Status from "./Status"

const ErrorInvalidCredentials = new Error("invalid credentials")

class AuthenticationStore {

    @observable
    authenticated

    @observable
    user

    @observable
    status = Status.PENDING

    constructor() {

        this.logout = this.logout.bind(this)
        this.storeToken = this.storeToken.bind(this)
        this.validateToken = this.validateToken.bind(this)
        this.parseToken = this.parseToken.bind(this)

        const storedToken = localStorage.getItem("TOKEN")

        if (!storedToken) {
            this.authenticated = false
            this.status = Status.DONE
            return
        }

        if (this.validateToken(storedToken)) {
            this.parseToken(storedToken)
            this.authenticated = true
        } else {
            this.authenticated = false
        }

        this.status = Status.DONE
    }

    validateToken(token) {
        return true
    }

    storeToken(token) {
        localStorage.setItem("TOKEN", token)
        localStorage.setItem("KNOWN", true)
    }

    parseToken() {
        this.user = {
            username: "bene",
            email: "benedict@flowengine.cc"
        }
    }

    @action logout() {
        localStorage.removeItem("TOKEN")
        this.authenticated = false
    }

    @action
    async signIn(args) {

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST"
        })

        const data = await res.json()
        const success = true

        if (success) {
            runInAction(() => {
                const token = "MOCK_TOKEN"

                this.parseToken(token)
                this.storeToken(token)
                this.authenticated = this.validateToken(token)
            })
        } else {
            throw ErrorInvalidCredentials
        }
    }

    @action
    async signUp() {

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST"
        })

        const data = await res.json()
        const success = true

        if (success) {
            runInAction(() => {
                const token = "MOCK_TOKEN"

                this.parseToken(token)
                this.storeToken(token)
                this.authenticated = this.validateToken(token)
            })
        } else {
            throw ErrorInvalidCredentials
        }
    }
}

export default new AuthenticationStore()