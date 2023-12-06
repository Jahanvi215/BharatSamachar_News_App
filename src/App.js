
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/Register';
import Layout from './components/Layout';

function App() {
  const [category, setCategory] =useState("general")
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/> }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
