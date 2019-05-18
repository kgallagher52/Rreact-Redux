import React, { useState } from 'react'

//Components
import User from './User';
 function MainPage() {
    const [user, changeUser] = useState('Keaton');

  return (
    <div className="main-page">
      <h1>The Main Page</h1>
      <button onClick={() => changeUser('Siri')}>Change User Name</button>
      <User userName={user} />
    </div>
  )
}

export default MainPage;
