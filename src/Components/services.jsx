import React from 'react'
import servicIcon_01 from '../assets/images/icons/pen-yellow.png'
import servicIcon_02 from '../assets/images/icons/code.png'
import servicIcon_03 from '../assets/images/icons/search-yellow.png'
import servicIcon_04 from '../assets/images/icons/marketing.png'
import servicIcon_05 from '../assets/images/icons/code-white.png'
import servicIcon_06 from '../assets/images/icons/marketing-white.png'
import SingleCountdown from '../SingleFeatures/SIngleCountdown'
import SectionTitle from './section_title'
export default function Services() {
  return (
    <div className='services-area section-ptb bgs' id='services'>
      <div className='container'>
        <SectionTitle
          title='SERVICES'
          subTitle='What I Am Great At'
          desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia'
        />
      </div>
      <div className='container'>
        <div className='row service-row mt-45'>
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_01} alt='design' />
                <img className='d-none' src={servicIcon_02} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>UI/UX Design</h4>
                <p>129 projects</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_05} alt='design' />
                <img className='d-none' src={servicIcon_02} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>Web Development</h4>
                <p>221 projects</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_03} alt='design' />
                <img className='d-none' src={servicIcon_03} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>Web Research</h4>
                <p>450 projects</p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_06} alt='design' />
                <img className='d-none' src={servicIcon_04} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>Marketing</h4>
                <p>331 projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='counter-area mt-45'>
        <div className='container'>
          <div className='row'>
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Years of Experience'
              start={0}
              end={9}
              duration={5}
            />
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Satisfied Customers'
              start={0}
              end={200}
              duration={7}
            />
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Design Items'
              start={0}
              end={769}
              duration={9}
            />
            <SingleCountdown
              title='Clients Served'
              start={0}
              end={124}
              duration={10}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
