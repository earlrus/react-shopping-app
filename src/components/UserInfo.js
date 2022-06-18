import React from 'react'

const UserInfo = (props) => {
  return (
    <table>
        
        <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.email}</td>

    
   
    </table>
  )
}

export default UserInfo