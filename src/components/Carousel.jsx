import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../assets/gifs/gif1.gif';
import gif2 from '../assets/gifs/gif2.gif';
import gif3 from '../assets/gifs/gif3.gif';
import gif4 from '../assets/gifs/gif4.gif';
import gif5 from '../assets/gifs/gif5.gif';
import gif6 from '../assets/gifs/gif6.gif';
import styles from '../styles/carousel.module.css';

function CarouselComponet() {
  return (
      <Carousel className={styles.carouselContainer}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default CarouselComponet