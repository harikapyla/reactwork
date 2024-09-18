import React from 'react'
import Sidenav from '../components/sidenav'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Assets/profile.jpg';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Dashboard() {
  
  return (
    <div >
      <Row>
        <Col sm={2} style={{backgroundColor:'whitesmoke', justifyContent:'center', textAlign:'center'}}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <Col sm={2}>
          <div className='header'>
            <div className='icon1' >
                <h2><ManageSearchIcon/></h2>
                <input type="search" />
            </div>
            <div style={{display:'flex', gap:'20%'}}>
                <h2><FavoriteBorderIcon/></h2>
                <h2><ShoppingCartIcon/></h2>
            </div>
          </div>
          </Col>
          <Col sm={8}>
          <img src={Profile} alt=""/><br /><br />
          <img src={Profile} alt=""/><br /><br />
          <img src={Profile} alt=""/><br /><br />
          <img src={Profile} alt=""/><br /><br />
          <img src={Profile} alt=""/><br /><br />
          </Col>
        </Col>
      </Row>

    </div>
  )
}

export default Dashboard