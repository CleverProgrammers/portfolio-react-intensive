import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaSkype,
  FaTwitter,
  FaDribbble,
  FaFacebookF,
} from 'react-icons/fa'
import SectionTitle from './section_title'

export default function Contact() {
  return (
    <div className='contact-area section-ptb' id='contact'>
      <div className='container'>
        <SectionTitle
          title='CONTACT US'
          subTitle='Ways To Contact Me'
          desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia'
        />
      </div>
      <div className='container mt-45'>
        <div className='row md-justify-content-center'>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaEnvelope />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                david@gmail.com
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaPhone />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                +1 (818) 2489 XX
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaSkype />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                live:DavidRakosi
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaTwitter />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                @DavidRakosi
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaDribbble />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                Cleverprogrammer
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaFacebookF />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.facebook.com/david.rakosi'
              >
                David Rakosi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
