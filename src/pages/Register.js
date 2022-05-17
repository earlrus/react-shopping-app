import React, { useRef,useState } from 'react'
import './Register.css'
import axios from 'axios';


const Register = () => {

    const [register,setRegister]=useState(false)
    const [valid,setValid]=useState(true)

    let enteredName=useRef();
    let enteredEmail=useRef();
    let enteredPassword=useRef();
    let re_enteredPassword=useRef();
    let enteredMobileNo=useRef();
    let enteredAge=useRef();



    const submitHandler=async(e)=>{
        e.preventDefault();
        const name=enteredName.current.value
        const email=enteredEmail.current.value
        const password=enteredPassword.current.value
        const re_password=re_enteredPassword.current.value
        const mobile_no=enteredMobileNo.current.value
         const age=enteredAge.current.value

const passwordValidity=password===re_password;


        console.log(name,email,password,re_password,age,passwordValidity);

        if(!passwordValidity)
        {
          return setValid(false)
          
        }
        
            
    

        try {
            const res=await axios.post("https://user-authentication-aman.herokuapp.com/users",
            {
                name,
                email,
                password,
                mobile_no,
                age
        }   )
        
            console.log(res.data);
            setRegister(true)
            setValid(true)
            
        } catch (error) {
            console.log(error);
        }
        
            }


  return (
    <div className='main-register'>
      
      <div className='register-style'>
          
      <form onSubmit={submitHandler}>
                Name <input id="name" ref={enteredName}/><br/>
                Email <input id="emil" ref={enteredEmail}/><br/>
               Password <input id="password" ref={enteredPassword}/><br/>
               Re-Password <input id="password" ref={re_enteredPassword}/><br/>
               Mobile no <input id="mobile-no" ref={enteredMobileNo}/><br/>
               Age <input id="age" ref={enteredAge}/><br/>
               <button>SignUp</button> 
<br/>
               
 </form>
            {register && valid &&<p>Successfully Registered!!!</p>}
            {!valid && <p>Password should match</p>}
      </div>

    </div>
  )
}

export default Register
