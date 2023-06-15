import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import './index.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
