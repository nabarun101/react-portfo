import React from 'react'
import {Link} from 'react-router-dom';

function Project(props) {
  return (
    <li className='project-count'>
        <Link to="/projects" className='project-count' >
            <img src={props.image} alt="not found" />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim mollitia ipsa error suscipit ad quos. Quo dignissimos est dicta nam laboriosam qui asperiores voluptate omnis sapiente ab. Quia nam deleniti commodi!</p>
        </Link>
    </li>
  )
}

export default Project