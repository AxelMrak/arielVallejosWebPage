import React from 'react';
import gif1 from '../assets/gifs/gif1.gif';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import mainImage from '../assets/mainImg.jpeg';

function CarouselComponet() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={gif1} class="d-block w-100" alt="..." height='400px'/>
        </div>
        <div className="carousel-item">
          <img src={gif2} class="d-block w-100" alt="..." height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif3} class="d-block w-100" alt="..." height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif4} class="d-block w-100" alt="..." height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif5} class="d-block w-100" alt="..." height='400px' />
        </div>
        <div className="carousel-item">
          <img src={gif6} class="d-block w-100" alt="..." height='400px' />
        </div>
        <div className="carousel-item">
          <img src={mainImage} class="d-block w-100" alt="..." height='400px' />
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