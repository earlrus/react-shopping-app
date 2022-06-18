import React from 'react'
import { useRef,useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Admin = () => {

    const [isLogin,setIsLogin]=useState()

const enteredEmail=useRef();
const enteredPassword=useRef();
const history=useHistory();

const submitHandler=async (e)=>{
e.preventDefault();
const email=enteredEmail.current.value;
const password=enteredPassword.current.value;

try {
    const res=await axios.post("http://localhost:3000/admin-login",{
        email,
        password
    })
    console.log(res.data);  
    setIsLogin(true)
    history.replace('/admin-op')

} catch (error) {
    setIsLogin(false)
    console.log(error);
}


}




  return ( <div className='admin-main'>

<div className='admin'>
        <form onSubmit={submitHandler}>
Email<input type='text' ref={enteredEmail}/><br/>
Password<input type='text' ref={enteredPassword}/><br/>
<button>Login</button><br/>

{isLogin && <p>Successfully Login</p> }
        </form>

        
        
       
    </div>

      </div>
   

  )
}

export default Admin