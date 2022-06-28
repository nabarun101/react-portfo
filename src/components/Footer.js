import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    let yr=new Date().getFullYear();
  return (
    <div id='scroll' className='outer-footer'>
        <h2>Contact Page</h2>
        <div className="site-links">
            <Link to="/contact" className='cont-link' ><i class="fas fa-address-book"></i> Contact Us</Link>
            <p className='foot-link'><i className='fas fa-phone'></i> +91 6000853140</p>
            <p className='foot-link'><i className='fas fa-phone'></i> +91 8318903917</p>
            <p className='foot-link'><i className='fas fa-envelope'></i> nabarunlifebegins1280@gmail.com</p>
            <p className='foot-link'><i className='fas fa-envelope'></i> 123swarajsingh@gmail.com</p>
        </div>
        <div className="site-logos">
            <img src="/images/css-3-logo-png-transparent.png" alt="notfound" />
            <img className='git' src="/images/git.png" alt="notfound" />
            <img src="/images/js.png" alt="notfound" />
            <img className='mongo' src="/images/mongo.png" alt="notfound" />
            <img  className='node' src="/images/node.png" alt="notfound" />
            <img src="/images/react.png" alt="notfound" />
        </div>

        <p className='website-rights'>PORTIFY © Nabarun Gathiri & Swaraj Singh {yr}</p>
    </div>
  )
}

export default Footer