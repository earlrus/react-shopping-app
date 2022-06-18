import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './UserProfile.css'
import UserInfo from './UserInfo'


const UserProfile = () => {

 

    const [userData,setUserData]=useState([])

const getProfile=async ()=>{

    try {
        const res=await axios.get("http://localhost:3000/admin/users-info");
        console.log(res.data)
        setUserData(res.data)

    } catch (error) {
        console.log(error);
    }

}

useEffect(()=>{
getProfile();
},[])



  return (
    <div className='main'>
        <table>
            <tr>
            <th>Id</th>  
       <th>Name</th>
       <th>Email</th>
      
            </tr>
<tr>
{userData.map((data)=>{
          
          return <UserInfo 
          key={data._id}
          id={data._id}
          name={data.name}
          email={data.email}
          />
      })} 
</tr>
     
      
        </table>
    </div>
  )
}

export default UserProfile