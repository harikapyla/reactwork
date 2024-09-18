import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const signup = () => {
  return (
    <div className='login'>
      <h1>Sing Up</h1><br />
      <form className='form'>
      <div className='icon1'>
            <h1><EmailIcon/></h1>
            <input type='text' placeholder='User FullName'></input>
        </div><br />
        <div className='icon1'>
            <h1><EmailIcon/></h1>
            <input type='email' placeholder='name@gmail.com'></input>
        </div><br />
        <div className='icon1'>
            <h1><LockIcon/></h1>
        <input type='password' placeholder='Password'></input><br />
        </div><br />
        <div className='icon1'>
        <h1><LockIcon/></h1>
        <input type='password' placeholder='Confirm Password'></input>
       </div><br />
       <div>
            <lable>Gender:</lable><br />
           Male: <input type="radio" name='gender'/>
           Female: <input type="radio" name='gender'/>
           Other: <input type="radio" name='gender'/>
       </div><br />
        <Link to='/login'><button id='btn'>Sign Up</button></Link>
      </form>
    </div>
  )
}

export default signup;
