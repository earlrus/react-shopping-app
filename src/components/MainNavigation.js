import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.scss'
import { useHistory } from 'react-router-dom'

const MainNavigation = () => {

const history=useHistory();

const adminHandler=()=>{
  history.push('/admin')
}

  return (
    <div className='header'>
        <img src="https://optinmonster.com/wp-content/uploads/2019/01/cart-abandonment-statistics.png" alt="logo"/>
       <h1>Smart Shoppe</h1>

       <button id='fst' onClick={adminHandler}> Admin</button>
      <button> <Link to={'/login'}>Login</Link> </button>
    
      <button> <Link to={'/logout'}>Logout</Link></button>
    </div>
  )
}

export default MainNavigation
