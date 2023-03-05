import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
const SecSkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="skill" id="skills">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-con">
              <h2>Skills</h2>
              <p>You Can See My Skills Here</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">

                <div className="skill-item">
                  <div className="outer">
                    <div className="inner">
                      <div className="number">
                        88%
                      </div>

                    </div>

                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />

                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>

                  <h6>FrontEnd Development</h6>


                </div>

                {/* ////// */}

                <div className="skill-item">
                  <div className="outer">
                    <div className="inner">
                      <div className="number">
                        90%
                      </div>
                    </div>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />

                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>


                  <h6>Web Designer</h6>
                </div>

                <div className="xl-6">
                  <div className="skill-item">
                    <div className="outer">
                      <div className="inner">
                        <div className="number">
                          87%
                        </div>
                      </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                      width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />

                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>


                    <h6>Photographer</h6>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="outer">                    <div className="inner">
                      <div className="number">
                        85%
                      </div>
                    </div>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />

                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>


                  <h6>book reader</h6>
                </div>
                 </Carousel>
                 </div>
          </div>
      </div>

    </div>
    
</div >
 )
}
export default SecSkills
