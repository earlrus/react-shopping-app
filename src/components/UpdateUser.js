import React from 'react'
import { useRef,useState } from 'react'
import './UpdateUser.css'
import axios from 'axios'

const UpdateUser = () => {
const enteredId=useRef();
const enteredName=useRef();
const enteredEmail=useRef();
const enteredPassword=useRef();

const enteredMobileNo=useRef();
const enteredAge=useRef();

const [userUpdate,setUserUpdate]=useState(false)

const submitHandler=async (e)=>{
e.preventDefault();

const id=enteredId.current.value;
const name=enteredName.current.value;
const email=enteredEmail.current.value;
const password=enteredPassword.current.value;
const mobile=enteredMobileNo.current.value;
const age=enteredAge.current.value;

try {
    
    const res=await axios.patch(`http://localhost:3000/admin/update-user/${id}`,{
        name,
        email,
        password,
        mobile,
        age
    })

console.log((res.data));
setUserUpdate(true)
} catch (error) {
    console.log(error);
    setUserUpdate(false)
}
}

  return (
    <div className='main'>

        <form onSubmit={submitHandler}>
        ID<input type='text' placeholder='Enter user id'ref={enteredId}/><br/>
        NAME<input type='text' placeholder='Enter name to change' ref={enteredName}/><br/>
        EMAIL<input type='text' placeholder='Enter email to change' ref={enteredEmail}/><br/>
        PASSWORD<input type='text' placeholder='Enter password to change' ref={enteredPassword}/><br/>
        MOBILE_NO<input type='text' placeholder='Enter mobile no to change' ref={enteredMobileNo}/><br/>
        AGE<input type='text' placeholder='Enter age to change' ref={enteredAge}/><br/>
        <button>Submit</button>

        {userUpdate && <h2>User Updated Successfully!!!</h2> }
        </form>
       

        
    </div>
  )
}

export default UpdateUser