import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Team from './Team'
import Contact from './Contact'
import  {Profile}  from './Profile'


export const Router = () => {
  return (
    <div>
     <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/review' element={<Contact/>}/>
            <Route path='/profile' element={<Profile/>}/>
         </Routes>
         </BrowserRouter> 
    </div>
  )
}
