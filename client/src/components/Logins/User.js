import React, { useState } from 'react'
import './User.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import googleIcon from '../../assets/googleIcon.png'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


function User({auth, google}) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
  return (
    <div  className='userFormContainer userContainer'>
        <div>
            <span className='textinuser'>Do you want to <b>Rent</b> a common place? Sign In</span>
        </div>
        <div >
            <form className='userFormContainer'>

            <label className='userLabels'>Email</label>
            <div className='userInputContainer'>
            <PersonOutlineTwoToneIcon></PersonOutlineTwoToneIcon>
            <input className='userInput' type='email' placeholder='Type your email' value={username} onChange={(e) => setUsername(e.target.value)} required ></input>
            </div>
            <label className='userLabels'>Password</label>
            <div className='userInputContainer'>
            <LockTwoToneIcon></LockTwoToneIcon>
            <input className='userInput' type='password' placeholder='Type your password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            </div>
            <a className='userForgotPassword'>Forgot password?</a>
            <a className='userForgotPassword'>Not Registered?</a>
            <input className='userButton' type='button' value='Sign In' onClick={() => auth(username, password)}></input>
            </form>
            <div>
                <span>Or...</span>
            </div>
            <div className='userGoogleContainer' onClick={() => google()}>
                <img src={googleIcon} height='20' alt='G'></img>
                <span>Google</span>
            </div>
        </div>
    </div>
  )
}

export default User