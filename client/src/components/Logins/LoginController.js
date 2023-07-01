
import React, { useRef, useState } from 'react'
import './LoginController.css';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import googleIcon from '../../assets/googleIcon.png'
import { Box, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function LoginController({auth, google, reset}) {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const forgotPassword = useRef();

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
                        <input className='userInput' type='password' placeholder='Retype your password' value={repassword} onChange={(e) => setRePassword(e.target.value)} required></input>
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
            {!register ? <a className='userForgotPassword' onClick={handleOpen}>Forgot password?</a> : null }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Forgot your password?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Type your email: 
                </Typography>
                <div className='loginModalStyle'>
                <div className='userInputContainer loginModalInput'>
                <PersonOutlineTwoToneIcon></PersonOutlineTwoToneIcon>
                <input className='userInput loginInputModal' type='email' placeholder='Type your email to recover your password ' name='forgotPasword' ref={forgotPassword}  required ></input>
                </div>
                <div className='loginModalStyleButtons'>
                <button className='userButton' onClick={() => reset(forgotPassword.current.value)}>Send</button>
                <button className='userButton' onClick={handleClose}>Close</button>

                </div>

                </div>
                </Box>
            </Modal>
            {register ? <a className='userForgotPassword' onClick={() => setRegister(!register)}>I have an account</a> 
                        : <a className='userForgotPassword' onClick={() => setRegister(!register)}>Not Registered?</a>
            } 
            {!register ? <input className='userButton' type='button' value='Sign In' onClick={() => auth(username, password)}></input>
                        : <input className='userButton' type='button' value='Sign Up' onClick={() => auth(username, password, repassword, dataUserRegistration, register)}></input>
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