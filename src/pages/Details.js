import { useSelector } from "react-redux";

import './Details.css'


const Details=(props)=>{

const name=useSelector(state=>state.name)
const image=useSelector(state=>state.image)
const description=useSelector(state=>state.description)
const price=useSelector(state=>state.price)





    return (
        <div className="details-main">
  <div className="details-one">
<img className="details-img" src={image} alt="product"/>
            </div>

<div className="details-two">
            
            <h1 className="details-heading">{name}</h1>
<h2 className="details-des">{description}</h2>
            <p className="details-para">Price:{price}</p>
       
        </div>
        
        </div>
      
        
    )
}

export default Details;
