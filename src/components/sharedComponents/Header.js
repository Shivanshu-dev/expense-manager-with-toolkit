import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();





  return (
    <div className='header-container'>
      <div>
    <p className='project-head'>Expensify</p>
      </div>
      <div>
    <Nav className="justify-content-end"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link style={{color:'white'}} onClick={()=> navigate('/')}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'white'}} onClick={()=> navigate('/register')}>Sign up</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
          </Nav.Link>
        </Nav.Item> */}
    </Nav>
        </div>
    </div>
  )
}

export default Header;