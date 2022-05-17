import React, { useRef } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';




const Login = () => {

    const history=useHistory();

    const enteredEmail=useRef();
const enteredPassword=useRef(); 

const isLogin=useSelector(state=>state.isLogin)

const [isLog,setIsLog]=useState(false)

let token=useSelector(state=>state.token)

const dispatch=useDispatch();

    const loginHandler=async (e)=>{
        e.preventDefault();
    
        const email=enteredEmail.current.value;
        const password=enteredPassword.current.value
    
        try {
            
            const res=await axios.post("https://user-authentication-aman.herokuapp.com/users/login",
            {
                email,
                password
            })
    
            console.log(res.data.token);
            setIsLog(true)
            
    dispatch({type:'IN',value:true})
  

    dispatch({type:'update_token',value:res.data.token})

console.log(token);    
console.log(isLogin);

setTimeout(()=>{
    history.replace('/welcome')
},2000)


        } catch (error) {
            console.log(error);
            dispatch({type:'IN',value:false})
            setIsLog(false)
        }
    }

  return (
    <div className='main-login'>
     <div className='login-style'>
     <form onSubmit={loginHandler}>
                
                Email <input id="email"  ref={enteredEmail}/><br/>
               Password <input id="password" ref={enteredPassword}/><br/>
              
               <button>Login</button> 

               {isLog && <p>Login Successfully!!!</p>}
               
               
<br/>
               
 </form>
     </div>
    </div>
  )
}

export default Login
