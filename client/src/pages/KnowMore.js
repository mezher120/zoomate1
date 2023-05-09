import React from 'react'
import './KnowMore.css'

function KnowMore() {
  return (
    <div className='knowContainer'>
      <div className='knowWrapperLeft'>
        <h1 className='knowTitle'>Rent a <span className='knowCommon'>common place</span> and help the owners to pay their flat bills</h1>
      </div>
      <div className='knowWrapperRight'>
        <div className='knowBox'>
        <div>
          <h4 className='knowHowItWorks'>How it works?</h4>
        </div>
        <p className='knowParagraph'>Well, in this site you will find loans of common places to have your birthdays, friend's meetings, work outings or what you want to do in a place to share with others. </p>
        <ul className='knowBullets'>
          <li>
            Filter by various features
            <ul className='knowBulletsInside'>
              <li>
                <img className='knowBulletsTilde' src='https://www.ecsapem.com.ar/img/icono/tilde3.png' alt='tilde'></img>
                Barbeques
              </li>
              <li>
              <img className='knowBulletsTilde' src='https://www.ecsapem.com.ar/img/icono/tilde3.png' alt='tilde'></img>
                Pool
              </li>
              <li>
              <img className='knowBulletsTilde' src='https://www.ecsapem.com.ar/img/icono/tilde3.png' alt='tilde'></img>
                Pets
              </li>
              <li>
              <img className='knowBulletsTilde' src='https://www.ecsapem.com.ar/img/icono/tilde3.png' alt='tilde'></img>
                Others
              </li>
            </ul>
          </li>
          <li>Look for dates availables</li>
          <li>Pay with credit card</li>
          <li className='knowQR'>Obtain the QR to enter the building</li>
        </ul>
        <br></br>
        <div className='knowbuttonContainer'>
        <button onClick={() => window.location.href = '/'} className='knowButton'>Go and Rent</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default KnowMore