import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
     </div>
    </AuthProvider>
  </BrowserRouter>
)

//we found error  in while doing routing we have to browserrouter if react strict mode means it renders two times 