import React from 'react'

function User(props) {
  return (
    <div>
      <h1>The User Page</h1>
        <h4>The current user is:{props.userName}</h4>
    </div>
  )
}
export default User;