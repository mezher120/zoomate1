import React from 'react'
import User from '../components/Logins/User'
import Admin from '../components/Logins/Admin'
import './Login.css'
import '../components/Navbar.css'

function Login() {

  const goHome = () => window.location.href = '/';

  return (
    <div className='loginbackground'>
    <div>
    <h1 onClick={() => goHome()} className='Navlogo loginFont'>Zoomate.com</h1>
    </div>
    <div className='loginContainer'>
        <User></User>

        <Admin></Admin>

    </div>
  </div>
  )
}

export default Login