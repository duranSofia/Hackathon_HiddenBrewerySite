import React from 'react'
import {Redirect} from 'react-router-dom';

const HomeCompo = ({isLoggedIn}) => {

  return isLoggedIn ? (
    <h1>
            Welcome to the secret page!
            Welcome to the secret page!
            Welcome to the secret page!
            Welcome to the secret page!
            Welcome to the secret page!
            Welcome to the secret page!

    </h1>
  
  ) : <Redirect to="/" />
}

export default HomeCompo
