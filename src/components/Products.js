import './Product.css'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Products=(props)=>{
const [products,setProduct]=useState();

const name=useSelector(state=>state.name)
const image=useSelector(state=>state.image)
const description=useSelector(state=>state.description)
const price=useSelector(state=>state.price)
const history=useHistory();

const dispatch=useDispatch();

    const showDetails=async ()=>{

        try {
const res=await axios.get("https://course-api.com/react-store-products")
     setProduct(res.data)
const details=products.find((prd)=>{
    return prd.name===props.name
})

dispatch({type:'name',value:details.name})
dispatch({type:'image',value:details.image})
dispatch({type:'description',value:details.description})
dispatch({type:'price',value:details.price})

console.log(name,image,description,price);

history.push('/details')
        } catch (error) {
            console.log(error);
        }
    }

    return(


<div className='main-style'>
<div className="products-style">

<img src={props.image} alt="products"/>
    <h1>{props.name}</h1>
    
    <p>Price:{props.price}</p>
    <button onClick={showDetails}>Show Details</button>
</div>





</div>
    )
}

export default Products