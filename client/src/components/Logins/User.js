import React, { useState } from 'react'
import './User.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import googleIcon from '../../assets/googleIcon.png'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import LoginController from './LoginController';


function User({auth, google}) {
    
  return (
    <LoginController auth={auth} google={google}></LoginController>
  )
}

export default User