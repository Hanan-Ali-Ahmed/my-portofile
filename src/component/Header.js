import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import {Navbar , Container , Nav,Col} from "react-bootstrap"
import {HashLink} from 'react-router-hash-link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {FaLinkedinIn}  from "react-icons/fa"
const Header = ()=>{
    const [activeLink , setActiveLink] = useState('home');
    const [scrolled , setScrolled] = useState(false);
     useEffect(() =>{
     const onScroll =() =>{
        if(window.scrollY > 50){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
     }
     window.addEventListener("scroll", onScroll);
     return () => window.removeEventListener("scroll",onScroll);
         },[])

       const onUpdataActiveLink =(value)=>{
        setActiveLink(value);
       }

    return(
<BrowserRouter>
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>

      <Container>
        <Navbar.Brand href="/">

           <span className="logo">LOGO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink=== 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdataActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink=== 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdataActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink=== 'projects'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdataActiveLink('project')}>Projects</Nav.Link>
          </Nav>
         
          <span className="navbar-text">
           
          <div className="social-icon1">
            <i className="i1"><a href="https://www.linkedin.com/in/hanan-ali-01472b259"><FaLinkedinIn/></a></i>
             </div>
             <div className="social-icon2">
            <i className="i2"><a href="#"><FaFacebookF/></a></i>
             </div>
             <div className="social-icon3">
            <i className="i3"><a href="#"><FaInstagram/></a></i>
             </div>
             

          <HashLink to="#connect">
        <button className="vvd" id="letsConnect"><span>Let's connect</span></button>
        </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </BrowserRouter>
    )
}
export default Header;