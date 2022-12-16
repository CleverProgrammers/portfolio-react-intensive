import React from 'react'
import logoImg from '../assets/images/logo/logo.png'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { FaBars, FaSkype, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom'
export default function HeaderTwo() {
  const navDropdownTitle = (
    <>
      Blog <FaLongArrowAltDown />
    </>
  )

  return (
    <div className='header-area'>
      <div className='container mt-60'>
        <div className='row justify-content-lg-between'>
          <div className='col-lg-12 px-0'>
            <div className='menu-area'>
              <Navbar collapseOnSelect expand='lg' className='p-0'>
                <div className='logo-area'>
                  <ReactLink to='/'>
                    <img className='img-fluid' src={logoImg} />
                  </ReactLink>
                </div>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                  <i className='text-white'>
                    <FaBars />
                  </i>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='ml-auto align-items-center'>
                    <ReactLink to='/' className='nav-link'>
                      Home
                    </ReactLink>
                    <Nav.Link href='/#portfolio'>Portfolios</Nav.Link>

                    <Nav.Link href='/#contact'>Contact</Nav.Link>
                    <ul className='mb-0 menu-social pl-15'>
                      <li className='list-inline-item menu-border'>
                        <Nav.Link href='#'>
                          <i>
                            <FaSkype />
                          </i>
                        </Nav.Link>
                      </li>
                      <li className='list-inline-item'>
                        <Nav.Link href='#'>
                          <i>
                            <FaFacebookF />
                          </i>
                        </Nav.Link>
                      </li>
                      <li className='list-inline-item'>
                        <Nav.Link href='#'>
                          <i>
                            <FaTwitter />
                          </i>
                        </Nav.Link>
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
