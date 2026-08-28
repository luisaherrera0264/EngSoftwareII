import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Prince from './jiraia.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Prince/>
  </StrictMode>,
)
