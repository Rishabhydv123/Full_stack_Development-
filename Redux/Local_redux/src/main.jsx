import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Provider } from 'react-redux'
import { ownStore } from './Store/Store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ownStore}>
      <App />
    </Provider>
  </BrowserRouter>
);