
import './Logout.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


const Logout = () => {

    let token=useSelector(state=>state.token)
    let isLogin=useSelector(state=>state.isLogin)

const [isLogout,setIsLogout]=useState(null)

const dispatch=useDispatch();

    const accessToken=`${token}`

    const apiUrl="https://user-authentication-aman.herokuapp.com"
    
    const authAxios=axios.create({
        baseURL:apiUrl,
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    })
    
        const logoutHandler=async (e)=>{
            e.preventDefault();
        
            
        
            try {
                const res=await authAxios.post(`${apiUrl}/users/logout`)
                console.log(res);

                
                dispatch({type:'IN',value:false})

                setIsLogout(true)
                console.log(isLogin);
        
            } catch (error) {
                console.log(error);
                setIsLogout(false)
                dispatch({type:'IN',value:true})
            }
        }
        



  return (
    <div className='main-logout'>
     <div className='logout-style'>
     <form onSubmit={logoutHandler}>
                
                
              
               <button>Logout</button> 
              {isLogout && <p>Successfully Logout</p>}
               
<br/>
               
 </form>
     </div>
    </div>
  )
}

export default Logout
