import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// {
//   "redirects": [
//     {
//       "source": "/lander",
//       "destination": "/",
//       "permanent": true
//     },
//     {
//       "source": "https://anjaliinfra.in/(.*)",
//       "destination": "https://www.anjaliinfra.in/$1",
//       "permanent": true
//     }
//   ],
//   "rewrites": [
//     {
//       "source": "/(.*)",
//       "destination": "/"
//     }
//   ]
// }


  