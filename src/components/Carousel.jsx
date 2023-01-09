import React from 'react';
import gif1 from '../assets/gifs/gif1.mp4';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import mainImage from '../assets/mainImg.jpeg';

function CarouselComponet() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ maxWidth: '400px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={gif1} className="d-block w-80" alt="Columna vertebral gif" height='400px'/>
        </div>
        <div className="carousel-item">
          <img src={gif2} className="d-block w-80" alt="Columna vertebral gif version 2" height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif3} className="d-block w-80" alt="Columna vertebral parte superior gif" height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif4} className="d-block w-80" alt="Axis hueso gif" height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif5} className="d-block w-80" alt="Axis hueso gif 2" width='320px' height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif6} className="d-block w-80" alt="Quiropraxia gif" width='320px' height='400px' />
        </div>
        <div className="carousel-item">
          <img src={mainImage} className="d-block w-80" alt="Diferentes terapias y alimentacion imagen principal" height='400px' />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default CarouselComponet