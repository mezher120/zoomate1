import React, { useState } from 'react'
import './User.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import googleIcon from '../../assets/googleIcon.png'
import LoginController from './LoginController';

function Admin({google, auth}) {

  return (
    <LoginController auth={auth} google={google}></LoginController>
  )
}

export default Admin