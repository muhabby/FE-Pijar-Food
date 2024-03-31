/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persiStore } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persiStore}>
      <App />
    </PersistGate>
  </Provider>
)
