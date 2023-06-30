
import React, { useState } from 'react'
import './LoginController.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import googleIcon from '../../assets/googleIcon.png'

function LoginController({auth, google}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [register, setRegister] = useState(false);
    const [dataUserRegistration, setDataUserRegistration] = useState({
        name: "",
        lastName: "",
        age: "",
        phone: "",
        typeUser: 'renter'
    })

    function setDataForRegistration(e) {
        console.log(e.target.name)
        setDataUserRegistration((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }
    
  return (
    <div  className='userFormContainer userContainer'>
        <div>
            <span className='textinuser'>Do you want to <b>Rent</b> a common place? {register ? 'Sign Up' : 'Sign In'}</span>
        </div>
        <div >
            <form className={`userFormContainer ${register ? 'userFormContainerRegistered' : null} `}>

            {!register ? <label className='userLabels'>Email</label> : null }
            <div className='userInputContainer'>
            <PersonOutlineTwoToneIcon></PersonOutlineTwoToneIcon>
            <input className='userInput' type='email' placeholder='Type your email' name='email' value={username} onChange={(e) => setUsername(e.target.value)} required ></input>
            </div>
            {!register ? <label className='userLabels'>Password</label> : null}
            <div className='userInputContainer'>
            <LockTwoToneIcon></LockTwoToneIcon>
            <input className='userInput' type='password' placeholder='Type your password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            </div>
            {register ? 
                        <div className='userInputRegistered'>
                        <div className='userInputContainer'>
                        <LockTwoToneIcon></LockTwoToneIcon>
                        <input className='userInput' type='text' placeholder='Retype your password' value={repassword} onChange={(e) => setRePassword(e.target.value)} required></input>
                        </div>
                        <div className='userInputContainer'>
                        <AssignmentIndTwoToneIcon></AssignmentIndTwoToneIcon>
                        <input className='userInput' type='text' placeholder='Name' name='name' value={dataUserRegistration.name} onChange={(e) => setDataForRegistration(e)} required></input>
                        </div>
                        <div className='userInputContainer'>
                        <AssignmentIndTwoToneIcon></AssignmentIndTwoToneIcon>
                        <input className='userInput' type='text' placeholder='Last Name' name='lastName' value={dataUserRegistration.lastName} onChange={(e) => setDataForRegistration(e)} required></input>
                        </div>
                        <div className='userInputContainer'>
                        <AssignmentIndTwoToneIcon></AssignmentIndTwoToneIcon>
                        <input className='userInput' type='number' placeholder='Age' name='age' value={dataUserRegistration.age} onChange={(e) => setDataForRegistration(e)} required></input>
                        </div>
                        <div className='userInputContainer'>
                        <SmartphoneTwoToneIcon></SmartphoneTwoToneIcon>
                        <input className='userInput' type='text' placeholder='Phone' name='phone' value={dataUserRegistration.phone} onChange={(e) => setDataForRegistration(e)} required></input>
                        </div>
                        </div>
                     : null   
            }
            {!register ? <a className='userForgotPassword'>Forgot password?</a> : null }
            {register ? <a className='userForgotPassword' onClick={() => setRegister(!register)}>I have an account</a> 
                        : <a className='userForgotPassword' onClick={() => setRegister(!register)}>Not Registered?</a>
            } 
            {!register ? <input className='userButton' type='button' value='Sign In' onClick={() => auth(username, password)}></input>
                        : <input className='userButton' type='button' value='Sign Up' onClick={() => auth(username, password, dataUserRegistration, register)}></input>
            }
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

export default LoginController