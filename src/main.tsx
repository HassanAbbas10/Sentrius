import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./Appwrite/DbConn.ts"

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App />
  </StrictMode>
 
)
