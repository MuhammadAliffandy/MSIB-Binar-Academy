import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import './style/index.css'
import Home from './pages/home.jsx'
import SearchCar from './pages/searchCar.jsx'
import ErrorPage from './component/error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="searchCar" element={<SearchCar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
