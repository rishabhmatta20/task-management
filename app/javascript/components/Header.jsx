import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import PropTypes from "prop-types"

const Header = ({ currentUser }) => {
  return(
    <Navbar bg='dark'>
      <Container>
        <Navbar.Brand href="/" className='text-white'>Task Management</Navbar.Brand>
        <Navbar.Toggle />
        {
          <Navbar.Collapse className="justify-content-end">
            {
              currentUser ? (
                <>
                  <Navbar.Text className='text-white'>
                    Signed in as: <a href="#login" className='text-white'>{currentUser.email}</a>
                  </Navbar.Text>
                  <Navbar.Text className='text-white'>
                    <a href="/users/sign_out" data-method="delete" className='text-white ml-4'>Logout</a>
                  </Navbar.Text>
                </>
              ) : (
                <>
                  <Navbar.Text className='text-white'>
                    <a href="/users/sign_in" className='text-white'>Login</a>
                  </Navbar.Text>
                  <Navbar.Text className='text-white'>
                    <a href="/users/sign_up" className='text-white ml-2'>Register</a>
                  </Navbar.Text>
                </>
              )
            }
          </Navbar.Collapse>
        }
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header
