import React from 'react'
import MainNavigation from '../components/MainNavigation'

const Login = (props) => {
  return (
    <div className='wrapper'>
     <MainNavigation />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Login
