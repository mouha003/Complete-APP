import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import React, { useState } from 'react';
import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [
        "img/slider1.jpg",
        "img/slider2.jpg",
        "img/slider4.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1 );
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1 );
    };

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div onClick={prevSlide} className="icon">
                <WestOutlinedIcon />
            </div>
            <div onClick={nextSlide} className="icon">
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider;