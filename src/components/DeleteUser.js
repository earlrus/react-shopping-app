import React from 'react'
import { useRef,useState } from 'react'
import axios from 'axios';


const DeleteUser = () => {

    const userId=useRef();
    const [userDelete,setUserDelete]=useState(false)

    const deleteHandler=async (e)=>{
        e.preventDefault();

const id=userId.current.value;

try {

    const res=await axios.delete(`http://localhost:3000/admin/delete-user/${id}`)
    console.log(res.data);
    setUserDelete(true)
    
} catch (error) {
    console.log(error);
    setUserDelete(false)
}

    }
    
  return (
    <div className='main'>
<form onSubmit={deleteHandler}>

<input type='text' placeholder='Enter User Id' ref={userId}/>
<button>Delete</button>
{userDelete && <p>User Deleted Successfully</p> }
</form>
    </div>
  )
}

export default DeleteUser