import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Team from './Team'


export const Router = () => {
  return (
    <div>
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/team' element={<Team/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  )
}
