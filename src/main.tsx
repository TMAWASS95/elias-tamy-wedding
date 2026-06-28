import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LangProvider } from './i18n'
import './styles.css'

// GitHub Pages SPA redirect: restore path saved by 404.html before React Router initializes.
const redirectPath = sessionStorage.getItem('spa_path');
if (redirectPath) {
  sessionStorage.removeItem('spa_path');
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
)
