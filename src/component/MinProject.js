import {Col} from "react-bootstrap"

const MinProject = ({title,description,imgg})=>{
    return(

     <Col sm={6} md={4}>
<div className="min-content">
<img src={imgg}/>
<div className="texts">
<h6>{title}</h6>
<span>{description}</span>


</div>


</div>

     </Col>

    )
}
export default MinProject;