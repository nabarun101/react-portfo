import React from 'react'
import './Info.css';
import {Link} from 'react-router-dom';

function Info() {
  return (
    <div className='out-info'>
        <h2 className='owner-heading'>About the Owners</h2>
        <div className="flex-info">
            <div className="person">
                <img src="/images/Nabarun.png" className='imageSize' alt="ss" />
                <div className="close">
                    <ul>
                        <li><i class="so1 fas fa-address-card"></i> Co-founder</li>
                        <li><i class="so2 fas fa-user"></i> Nabarun Gathiri</li>
                        <li><i class="so3 fab fa-edge"></i> Web-Developer</li>
                        <li><i class="so4 fas fa-university"></i> btech Mechanical Engineering National Institute of Technology Silchar, 2020-2024</li>
                        <li><i class="so5 fas fa-tags"></i> Maar waar dunga</li>
                    </ul>
                </div>
            </div>
            <div className="person">
                <img src="/images/Swaraj.png" className='imageSize' alt="sss" />
                <div className="close">
                    <ul>
                        <li><i class="so1 fas fa-address-card"></i> Co-founder</li>
                        <li><i class="so2 fas fa-user"></i> Swaraj Singh</li>
                        <li><i class="so3 fab fa-edge"></i> Web-Developer</li>
                        <li> <i class="so4 fas fa-university"></i> btech Mechanical Engineering National Institute of Technology Silchar, 2020-2024</li>
                        <li><i class="so5 fas fa-tags"></i> Oh fumck bhai itna swag</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="info-explore">
            <Link to='/about-us'><button>More Info</button></Link>
        </div>
    </div>
  )
}

export default Info