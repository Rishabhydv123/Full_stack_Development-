import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import { BroeserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BroeserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
   </BroeserRouter>

)
