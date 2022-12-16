import React from 'react'
export default function Newsletter() {
  return (
    <div className='newsletter-area section-ptb' id='newsletter'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-8 col-md-8'>
            <div className='section-title text-center'>
              <h3 className='section-name pc'>STRAIGHT IN YOUR MAILBOX</h3>
              <h2>Subscribe To My Newsletter</h2>
            </div>
            <div className='email-input mt-70 mb-70'>
              <form action='#'>
                <input
                  className='bgs'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='INFO@EXAMPLE.COM'
                  required
                />
                <input className='ct-btn' type='submit' value='Subscribe' />
              </form>
            </div>
            <div className='social-links text-center'>
              <a href='https://www.instagram.com'>Instagram</a> |{' '}
              <a href='https://www.linkedin.com'>LinkedIn</a> |
              <a href='https://behance.net'>Behance</a> |{' '}
              <a href='https://dribbble.com/'>Dribbble</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
