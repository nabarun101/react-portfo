import React from 'react'
import Footer from '../Footer'
import './About.css';

function About() {
  return (
    <>
        <div className='about-outer'>
            <h1>__________ About us __________</h1>
            <p><em>Howdy and Welcome.</em> Two friends met during their college hustle in engineering who decided to start something together now overwhelms the world with their ideas. </p>
            <div className="sec">
              <h1><span>MOTIVATION</span> HUSTLE LEARN <span>BUILD</span></h1>
              <div className="sec1">
                <h2>Who We Are</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla tempora ipsa aliquam dolores. Nam, dolorem animi voluptas voluptatum rem accusamus expedita, sequi qui saepe, voluptatibus dolorum! Nisi quasi iure modi nulla voluptas!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eum officiis non consequuntur, modi sequi quia numquam dicta quaerat fugit omnis possimus.</p>
              </div>
            </div>
            <div className="third">
              <div className="third1">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla tempora ipsa aliquam dolores. Nam, dolorem animi voluptas voluptatum rem accusamus expedita, sequi qui saepe, voluptatibus dolorum! Nisi quasi iure modi nulla voluptas!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eum officiis non consequuntur, modi sequi quia numquam dicta quaerat fugit omnis possimus.</p>
              </div>
              <h1><span>EXPERIENCE</span> IN <span>UI</span> <span>Webapps</span>  </h1>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About