import React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans';
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostLayout from './Components/HostLayout';
import VanDetail from './Pages/VanDetail';
import HostVans from './Pages/Host/HostVans';
import HostVansDetail from './Pages/Host/HostVansDetail';
import Photos from './Pages/Host/Photos';
import Price from './Pages/Host/Price';

import "./server"
import Info from './Pages/Host/Info';

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVansDetail/>}>
              <Route index element={<Info/>}/>
              <Route path='pricing' element={<Price/>}/>
              <Route path='photos' element={<Photos/>}/>
            </Route>
          </Route>
        </Route>        
      </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App
