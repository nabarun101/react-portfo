import React,{useState} from 'react'
import { SliderData } from './SliderData'
import './HomeSection.css'
 
const HomeSection= ({slides}) => {
  const [current,setCurrent]=useState(0);
  const length=slides.length;

  const autoChange=()=>{
    setCurrent(current === length -1 ? 0: current+1);
  }


  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }

  return (
    <>
      <marquee direction="left">Click on the image to change it</marquee>
    <section className='slider'>
        {SliderData.map((slide,index)=>{
                return (
                    <div className={index===current ? 'slide active':'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="not-found" onClick={autoChange} className='image' />) }
                        
                    </div>              
                )
        })}
    </section>
    </>
  )
}

export default HomeSection