import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'
import './styles/spinner.css'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
