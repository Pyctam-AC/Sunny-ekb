import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.scss'
import './styles/fonts/fonts.css'
import App from './components/App/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
