import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './config/registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'

const store = configStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()
