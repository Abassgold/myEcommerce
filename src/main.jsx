import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'
import ScrolToTop from './component/scrollToTop/ScrolToTop.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrolToTop/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
