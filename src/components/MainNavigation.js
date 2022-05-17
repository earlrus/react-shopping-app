import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
const MainNavigation = () => {
  return (
    <div className='header'>
        <img src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg" alt="logo"/>
       <h1>Smart Shoppe</h1>
      <button id="fst"> <Link to={'/login'}>Login</Link> </button>
      <button> <Link to={'/logout'}>Logout</Link></button>
    </div>
  )
}

export default MainNavigation
