import axios from "axios";
import { Fragment, useEffect,useState,useRef } from "react";
import Products from "../components/Products";
import './Home.css'

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home=()=>{

    const name=useSelector(state=>state.name)
    const image=useSelector(state=>state.image)
    const description=useSelector(state=>state.description)
    const price=useSelector(state=>state.price)

const dispatch=useDispatch()

    const history=useHistory();

    const searchName=useRef();

    const [products,setProduct]=useState([]);

    const fetchProducts=async()=>{
      try {
        const res=await axios.get("https://course-api.com/react-store-products");
        console.log(res.data);
        setProduct(res.data)
      } catch (error) {
          console.log(error);
      }
    }

useEffect(()=>{
    fetchProducts();
},[])


const clickHandler=()=>{
    const SName=searchName.current.value.toLowerCase();
const result=products.find((prd)=>{
return prd.name===SName;
    })
    console.log(result.name);

    dispatch({type:'name',value:result.name})
    dispatch({type:'image',value:result.image})
    dispatch({type:'description',value:result.description})
    dispatch({type:'price',value:result.price})

    history.push('/details')


    console.log(name,image,description,price); 
    
    
}

    return (
<Fragment>

    <div className="search-style">

<input id="search" placeholder="Enter your search" ref={searchName} />
<button onClick={clickHandler}>Search</button>

</div>
{products.map((productItem)=> {

return <Products 
key={productItem.id}
name={productItem.name}
image={productItem.image}
price={productItem.price} 
description={productItem.description}
/>

})}

</Fragment>        
       
    );
}

export default Home