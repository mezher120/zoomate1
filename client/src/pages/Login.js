import React, { useEffect, useState } from 'react'
import User from '../components/Logins/User'
import Admin from '../components/Logins/Admin'
import './Login.css'
import '../components/Navbar.css'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase';
import { Alert } from '@mui/material'

function Login() {

  const [error, setError] = useState({
    email: false,
    password: false
  })
  const [success, setSuccess] = useState(false);

  const goHome = () => window.location.href = '/';

    if (error.email || error.password) {
      setTimeout(() => setError({
        email: false,
        password: false
      }), 2000);
    }

    if (success) {
      setTimeout(() => window.location.href = '/', 2000);
    }

  const googleProvider = new GoogleAuthProvider();
  
  async function googleSignIn() {
    try {
      const googleRes = await signInWithPopup(auth, googleProvider) 
      console.log(googleRes)
      const user = googleRes.user.email;
      console.log(user)
      localStorage.setItem('user', user);
      window.location.href = '/'

      console.log(user, 'signin')
    } catch (error) {
      console.log(error.message)
    }
  }


  async function createUser(email, password) {
    try {
      const userCreated = await createUserWithEmailAndPassword(auth, email, password) 
      console.log(userCreated)

      // alert('User Created') 
      setSuccess(true)
    } catch (error) {
      if (error.code.includes('email')) {
      //  alert('Revise your email') 
       setError({email: true})
      } 
      if (error.code.includes('password')) {
        // alert('Revise your passwrod') 
        setError({password: true})
       }
    }
  }

  return (
    <div className='loginbackground'>
    <div>
    <h1 onClick={() => goHome()} className='Navlogo loginFont'>Zoomate.com</h1>
    </div>
    <div className='loginContainer'>
        {error.email ? <Alert className='loginAlert' severity="error">Error - Revise your email</Alert> : ""}
        {error.password ? <Alert className='loginAlert' severity="error">Error - Revise your password</Alert> : ""}
        {success ? <Alert className='loginAlert' severity="success">User Created</Alert> : ""}
        <User auth={createUser} google={googleSignIn}></User>

        <Admin google={googleSignIn} ></Admin>

    </div>
  </div>
  )
}

export default Login