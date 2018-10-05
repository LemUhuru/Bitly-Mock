import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './config/registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'
import './BitlySDK'

const store = configStore()
console.log('store', store.getState())
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()
