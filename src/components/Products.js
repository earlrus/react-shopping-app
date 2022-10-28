
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";




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




<Flex>
<img src={props.image} alt="products"/>
    <h1>{props.name}</h1>
    
    <p>Price:{props.price}</p>
    <button onClick={showDetails}>Show Details</button>
    </Flex>




    )
}




const Flex=styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0.5rem;
scale: 0.8;
-webkit-box-shadow: 18px 11px 30px -8px rgba(105,82,105,1);
-moz-box-shadow: 18px 11px 30px -8px rgba(105,82,105,1);
box-shadow: 18px 11px 30px -8px rgba(105,82,105,1);
width: 25rem;
height:34rem;
justify-content: center;
gap:1rem;

h1{
    margin-top: 10px;
}

p{
font-size: 1.2rem;
letter-spacing: 0.2vh;
}

img{
    border-radius: 0.2rem;
    width: 20rem;
    height: 15rem;
}

button{
    font-size: 1.5rem;
    padding:1rem 0.5rem;
    margin-top: 2rem;
    letter-spacing: 0.5vh;
    border-radius: 0.2rem;
    font-family: 'Creepster', cursive;
}

`;

export default Products