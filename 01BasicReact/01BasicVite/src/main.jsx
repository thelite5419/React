import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Thelite from "./thelite";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Thelite />
  </StrictMode>,
)
