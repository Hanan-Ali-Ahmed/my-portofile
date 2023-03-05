import React from "react";
import { Col, Container, Tab , Row ,Nav} from "react-bootstrap";
import MinProject from "./MinProject"
import pic44 from "./images/pic44.jpg"
import pic45 from "./images/pic45.jpg"
import pic39 from "./images/pic39.jpeg"
import TrackVisibility from 'react-on-screen'
const Secproject = () => {
    const projects = [
        {
            title: "Programming",
            description: "Web Designer",
            imgg: pic44,
        },
        {

            title: "Pictures&videos",
            description: "Photographer",
            imgg: pic45,
        },

        {

            title: "Stories&novels",
            description: "Book Reader",
            imgg: pic39,
        },



        {

            title: "Programming",
            description: "Web Designer",
            imgg: pic44,
        },

        {

            title: "Pictures&videos",
            description: "Photographer",
            imgg: pic45,
        },
        {

            title: "Stories&novels",
            description: "Book Reader",
            imgg: pic39,
        },
                                  




];








return (
    <div className="project" id="projects">

        <Container>
            <Row>
                <Col>
          
              <h2>projects</h2>
              <p>My name is Hanan,I live in Baghdad,This is my project in react</p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills">
              <Nav.Item>
               <Nav.Link  eventKey="first">1st Section</Nav.Link>
              </Nav.Item>
              <Nav.Item>
               <Nav.Link  eventKey="second">2nd Section </Nav.Link>
              </Nav.Item>

              <Nav.Item>
               <Nav.Link  eventKey="third">3rd Section</Nav.Link>
              </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
               <Row>
               {
                projects.map((project, index) => {
                    return (
                       <MinProject
                       key={index}
                       {...project}/>)})}
               </Row>
                </Tab.Pane>
                 <Tab.Pane className="secondsectopn" eventKey="second"></Tab.Pane>
                 <Tab.Pane className="thirdsection"  eventKey="third">My name is Hanan, I live in Baghdad, I study react</Tab.Pane>

              </Tab.Content>


              </Tab.Container>
                      </Col>

            </Row>
        </Container>
      



    </div>
)
}
export default Secproject;