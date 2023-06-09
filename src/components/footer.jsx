import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
    <MDBFooter className=' footer text-center text-lg-left'>
    <MDBContainer className='p-4'>
      <MDBRow>
        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Footer text</h5>

          <p className='footerp'>
            info@selfieflash.hu
          </p>
          <p className='footerp'>+36 30 934 6892</p>
        </MDBCol>

        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Footer text</h5>

          <p>
          *Igény esetén nagyobb példányszámú nyomtatási lehetőség is kérhető.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='https://selfieflash.hu/'>
        SelfieFlash.hu
      </a>
    </div>
  </MDBFooter>
    )
}
