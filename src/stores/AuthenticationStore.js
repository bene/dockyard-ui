import {action, observable, runInAction} from 'mobx'
import Status from "./Status"

const ErrorInvalidCredentials = new Error("invalid credentials")

class AuthenticationStore {

    @observable
    authenticated = false

    @observable
    status = Status.PENDING

    @observable
    user

    constructor() {

        this.logout = this.logout.bind(this)
        this.storeToken = this.storeToken.bind(this)
        this.validateToken = this.validateToken.bind(this)
        this.parseToken = this.parseToken.bind(this)

        const storedToken = localStorage.getItem("TOKEN")

        if (!storedToken) {
            this.status = Status.DONE
            return
        }

        if (this.validateToken(storedToken) && this.parseToken(storedToken)) {
            this.authenticated = true
        } else {
            this.logout()
        }

        this.status = Status.DONE
    }

    validateToken(token) {
        return true
    }

    storeToken(token) {
        localStorage.setItem("TOKEN", token)
        localStorage.setItem("KNOWN", true.toString())
    }

    @action
    parseToken(token) {

        let data

        try {
            const body = token.split(".")[1]
            const decoded = window.atob(body)
            data = JSON.parse(decoded)
        } catch (e) {
            return false
        }

        this.user = data.user
        return true
    }

    @action
    async signIn(args) {

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST"
        })

        const data = await res.json()
        const success = true
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmVuZSIsImVtYWlsIjoiYmVuZWRpY3RAZmxvd2VuZ2luZS5jYyJ9fQ.JD6rgul47GSPdTZH_v1H4i4Qdotd5fVtL4qvGtWjsFE"

        if (success && token) {
            runInAction(() => {
                if (this.parseToken(token)) {
                    this.storeToken(token)
                    this.authenticated = true
                }
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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmVuZSIsImVtYWlsIjoiYmVuZWRpY3RAZmxvd2VuZ2luZS5jYyJ9fQ.JD6rgul47GSPdTZH_v1H4i4Qdotd5fVtL4qvGtWjsFE"


        if (success && token) {
            runInAction(() => {
                if (this.parseToken(token)) {
                    this.storeToken(token)
                    this.authenticated = true
                }
            })
        } else {
            throw ErrorInvalidCredentials
        }
    }

    @action
    logout() {
        localStorage.removeItem("TOKEN")
        this.authenticated = false
    }
}

export { AuthenticationStore }
export default new AuthenticationStore()