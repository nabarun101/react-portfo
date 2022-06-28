import React from 'react'
import Project from './Project';
import './ProjectPage.css'

function ProjectPage() {
  return (
    <div className='project-container'>
        <ul className='project-lists'>
            <Project image='/images/img-2.jpg' />
            <Project image='/images/img-3.jpg' />
            <Project image='/images/img-4.jpg' />
            <Project image='/images/img-5.jpg' />
            <Project image='/images/img-6.jpg' />
            <Project image='/images/img-7.jpg' />
            <Project image='/images/img-8.jpg' />
        </ul>
    </div>
  )
}

export default ProjectPage