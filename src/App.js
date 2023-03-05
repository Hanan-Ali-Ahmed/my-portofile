import React from 'react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import './App.css';
import SecSkills from './component/SecSkills';
import Secproject from './component/SecProject';
import Header from './component/Header';
import Section2 from './component/Section2'
import Forms from "./component/SecForm"
import Myproject from '../src/component/Myproject.js';
import Footer from "./component/Footer.js"
const App=() =>{
  return (
   <div className='portofile'>
     <Header/>
     <Section2/>
     <SecSkills/>
    <Secproject/>
    <Forms/>
    <Myproject/>
    <Footer/>   
    </div>
  );}
  export default App;
// /////////////////////////////// travel
// import "./Travel/Travel.css"
// import  Navbar  from "./Travel/Navbar/Navbar.jsx"
// import Home from "./Travel/Home/Home.jsx"
// import  Main  from "./Travel/Main/Main.jsx"
// import  Footer  from "./Travel/Footer/Footer.jsx"

// const App1 = () =>{
//   return(
//     <>
{/* <Navbar />
 <Home/> */}
{/* <Main/> */}
{/* <Footer/>  */}
{/* </>
  )
}
export default App1; */}