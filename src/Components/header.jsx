import React from 'react'
import logoImg from '../assets/images/logo/logo.png'
import '../assets/css/slick.min.css'

import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { FaBars, FaSkype, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Link as ReactLink } from 'react-router-dom'
export default function Header() {
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
                  <ReactLink to='/' className='nav-link'>
                    <div className='name'>
                      <h1>
                        DR<span className='pc'>.</span>
                      </h1>
                    </div>
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
                    <Link
                      className='nav-link'
                      to='portfolio'
                      smooth={true}
                      duration={2000}
                      activeClass='active'
                      spy={false}
                      offset={5}
                    >
                      {' '}
                      Portfolios{' '}
                    </Link>

                    <Link
                      className='nav-link'
                      to='contact'
                      smooth={true}
                      duration={2000}
                      activeClass='active'
                      spy={false}
                      offset={5}
                    >
                      {' '}
                      Contact{' '}
                    </Link>
                    <ul className='mb-0 menu-social pl-15'>
                      <li className='list-inline-item menu-border'>
                        <a href='#'>
                          <i>
                            <FaSkype />
                          </i>
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
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
