
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css'
import {App} from './App.jsx'
import { myStore } from './App/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
