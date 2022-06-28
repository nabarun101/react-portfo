import React from 'react'
import Card from './Card';
import './Cards.css';
import {Link } from 'react-router-dom';

function Cards(){
    return(
        <div className="outer">
            <h1 className="headtext">
                PROJECTS
            </h1>
            <p className='headpara'>Check out our works</p>
            <div className="inner">
                    <ul className='flex-container'>
                        <Card image="images/img-9.jpg" para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt consequatur eius culpa eum molestiae quaerat! Earum maxime inventore illum ad repellat debitis commodi nesciunt velit accusantium odio nulla, voluptatum rem quaerat."/>
                        <Card image="images/img-4.jpg" para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt consequatur eius culpa eum molestiae quaerat! Earum maxime inventore illum ad repellat debitis commodi nesciunt velit accusantium odio nulla, voluptatum rem quaerat."/>
                        <Card image="images/img-2.jpg" para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt consequatur eius culpa eum molestiae quaerat! Earum maxime inventore illum ad repellat debitis commodi nesciunt velit accusantium odio nulla, voluptatum rem quaerat."/>
                    </ul>
            </div>
            <div className="linkme">
                <Link to="/projects"><button>Explore</button></Link>
            </div>
        </div>
    )
}

export default Cards;