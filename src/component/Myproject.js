import React from "react";
import { Col, Container, Row , Card ,Button, Alert} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Form from 'react-bootstrap/Form';
 import Carousel from 'react-multi-carousel';
//  import pic1 from './component/images/pic1.png'
import { useState , useEffect } from "react";


 const MyProject = ({status,message,onValidated}) => {
    const [email,setEmail]=useState('')
    useEffect(()=>{
      if(status === 'success') clearFields();
    },[status])
    const handlesubmit = (e) =>{
      e.preventDefault();

      email && email.indexOf("@")> -1 && onValidated({Email : email})
    }
    const clearFields =() =>{
      setEmail('')
    }
    return(
      <Container>
         <Col lg={12}>
          <div className="newsletter-bx wow slideInUp">
            <Row>
              <Col lg={12} md={6} xl={5}>
                <h3>See my projects at once & leave here your E-mail address</h3>
                {status === 'sending' && <Alert>Sending...</Alert>}
                {status === 'error' && <Alert variant="danger">{message}</Alert>}
                {status === 'success' && <Alert variant="success">{message}</Alert>}</Col>
<Col md={6} xl={7}>
  <form onSubmit={handlesubmit}>
    <div className="new-email-bx">
      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email address"/>
      <button type="submit">Submit</button>
      </div></form></Col></Row></div></Col></Container>


 )
}
export default MyProject
