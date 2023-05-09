import React from 'react'
import './User.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import googleIcon from '../../assets/googleIcon.png'

function User() {
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
            <input className='userInput' type='email' placeholder='Type your email' required ></input>
            </div>
            <label className='userLabels'>Password</label>
            <div className='userInputContainer'>
            <LockTwoToneIcon></LockTwoToneIcon>
            <input className='userInput' type='password' placeholder='Type your password' required></input>
            </div>
            <a className='userForgotPassword'>Forgot password?</a>
            <a className='userForgotPassword'>Not Registered?</a>
            <input className='userButton' type='button' value='Sign In'></input>
            </form>
            <div>
                <span>Or...</span>
            </div>
            <div className='userGoogleContainer'>
                <img src={googleIcon} height='20' alt='G'></img>
                <span>Google</span>
            </div>
        </div>
    </div>
  )
}

export default User