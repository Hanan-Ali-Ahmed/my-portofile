import { Container, Row, Col} from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col size={12} sm={6}>
            <h1>LOGO</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

          <div className="icon11">
            <i className="i11"><a href="https://www.linkedin.com/in/hanan-ali-01472b259"><FaLinkedinIn/></a></i>
             </div>
             <div className="icon22">
            <i className="i22"><a href="#"><FaFacebookF/></a></i>
             </div>
             <div className="icon33">
            <i className="i33"><a href="#"><FaInstagram/></a></i>
             </div>
             <p>CopyRight 2023 All Rightes Reserved here</p>
             </Col>
             </Row>
             </Container>       
                             </div>




            )
}
            export default Footer;