import React from 'react'
import Profile from '../components/Assets/profile.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Link } from 'react-router-dom';

const sidenav = () => {
  return (
    <div className='sidenav'>
      <div>
        <h3 style={{paddingTop:'30px'}}>Pyla Harika</h3><br />
        <img src={Profile} alt=""/><br /><br />
      </div>
      <div className="dash">
        <h4><DashboardIcon/></h4>
        <Link to='/dashboard'><h4>Dashboard</h4></Link>
      </div><br />
      <div className='li'>
       <ul>
          <div className='di'>
            <h5><DinnerDiningIcon/></h5>
            <Link to='/items'><li>Items</li></Link>
          </div>
          <div className='di'>
            <h5><CategoryIcon/></h5> 
            <Link to='/categories'><li>Categories</li></Link>
          </div>
          <div className='di'> 
              <h5><InfoIcon/></h5>
              <Link to='/about'><li>About</li></Link>
          </div>
          <div className='di'>
            <h5><ElectricalServicesIcon/></h5> 
            <Link to='/services'><li>Services</li></Link>
          </div>
          <div className='di'>
            <h5><SettingsIcon/></h5> 
            <Link to='/settings'><li>Settings</li></Link>
          </div>
          <div className='di'>
            <h5><LiveHelpIcon/></h5> 
            <Link to='/faqs'><li>FAQs</li></Link>
          </div><br /><br />
          <div className='di'>
            <h4><LogoutIcon/></h4> 
            <Link to='/login'> <p>Logout</p></Link>
          </div>
        </ul>
        
      </div>
    </div>
  )
}

export default sidenav;
