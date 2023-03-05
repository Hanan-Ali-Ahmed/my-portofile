import {React} from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import {useState} from "react"
const Forms = () => {
  const [buttonItem , setButtonItem] = useState("send")
  const Send = (e) =>{
    e.preventDefault()
    setButtonItem("sending...")
   }
    return(
         <div className='sec-form' id="connect">
        <Container  className="form-parent">
       <Row>
        <p className='Get-In-Touch'>Get In Touch</p>
     <Col sm={10} md={9} lg={6} xl={6}> 
       <form className='formss'>
       <input type="text" placeholder="First Name"/>
       <input type="text" placeholder="Last Name"/>
       <input type="email" placeholder="Email Adress"/>
       <input type="number" placeholder="Phone No."/> 
       <button className='send' onClick={Send}><span>{buttonItem}</span></button>
              </form> 
      <textarea className='text-area' placeholder='Message'></textarea>
      
     </Col>
     
       </Row>
 

        </Container></div>
    )
}
export default Forms