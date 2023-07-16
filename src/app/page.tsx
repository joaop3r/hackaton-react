"use client"
import { HomePage } from '@/pages/HomePage';
import { Login } from '@/pages/Login';
import { Teste } from '@/pages/Teste';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teste" element={<Teste/>}/>
        <Route path="login/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}