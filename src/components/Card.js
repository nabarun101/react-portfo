import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        <li className="cards__item">
            <Link to="/project" className='style-link'>
                <div className='out-img'>
                    <img src={props.image} className="cards_img" alt="not found" />
                </div>
                <div className="para-cont">
                    <p className='cards_para'>{props.para}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem

