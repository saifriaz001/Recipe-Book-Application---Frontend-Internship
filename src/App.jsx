import axios from 'axios'
import React, { useEffect } from 'react'
import Recipe from "./components/Recipe";
import Description from './components/Description';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'


const App = () => {

  
  return (
    <div>   
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path ="/recipe" element={<Recipe/>}/>
         <Route path="/instructions/:id" element={<Description />} />
      </Routes>
    </div>
  )
}

export default App