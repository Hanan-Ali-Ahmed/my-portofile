import React from "react";
import { Container , Row , Col } from "react-bootstrap"
import { ArrowRight} from 'react-bootstrap-icons';
import {useState , useEffect} from 'react'
import pic6 from './images/pic6.jpeg'


const Section2 = () => {
    const [Num , setNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["FrontEnd Developer" , "Photographer" , "Web Designer"];
    const [text , setText]=useState('');
    const [delta , setDelta] = useState(300 - Math.random() *100); 
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() => {
       tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = Num % toRotate.length;
        const fullText = toRotate[i];
        const updateText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0 , text.length+1);
        setText(updateText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period)

        }
        else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setNum(Num + 1);
            setDelta(500);}

    }
    return(
        <div className="sec2" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                  
                    <span className="profile">welcome to my portofile</span>
                    <h1>{`Hi I'm Hanan Ali,`}<span>{text}</span></h1>
                    <p>Hello Everyone, I have 8 months Of Experience In Web Development</p>
                  <span className="span2">Let's connect<ArrowRight size={25}/></span>  
            
                
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={pic6} alt="no thing"/>
               </Col>
            </Row>
        </Container>

        </div>
    )
}
export default Section2