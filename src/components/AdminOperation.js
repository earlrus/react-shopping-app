import React from 'react'
import { useHistory } from 'react-router-dom'



const AdminOperation = () => {

  const history=useHistory();

const infoHandler=()=>{
history.push('/user-profile')
}

const updateHandler=()=>{
  history.push('/update-user')
}

const deleteHandler=async ()=>{

  history.push('/delete-user')
}

  return (
    <div>
     <button onClick={infoHandler}>Get User Info</button>
     <button onClick={updateHandler}>Update User</button>
     <button onClick={deleteHandler}>Delete User</button> 
    </div>
  )
}

export default AdminOperation