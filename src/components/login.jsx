import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='login'>
      <h1>Login</h1><br />
      <form className='form'>
        <div className='icon1'>
            <h1><EmailIcon/></h1>
            <input type='email' placeholder='name@gmail.com'></input>
        </div><br />
        <div className='icon1'>
            <h1><LockIcon/></h1>
        <input type='password' placeholder='*********'></input>
        </div>
        <p className='forgot-password'>forgot password?<span> Click!</span></p><br />
        <Link to='/dashboard'><button id='btn'>Login</button></Link>
        <p>Don't have an account? <Link to='/signup'><span>Sign Up</span></Link></p>
      </form>
      
    </div>
  )
}

export default login;
