import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import NasaGallery from './components/Nasa.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NasaGallery />
  </StrictMode>,
)
