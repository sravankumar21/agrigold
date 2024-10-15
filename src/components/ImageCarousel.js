import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/homeimage5.jpg';
import img2 from '../images/homeimage3.jpg';
import img3 from '../images/homeimage4.jpg';
import '../styles/ImageCarousel.css'; // Import your CSS for styling

const ImageCarousel = () => {
  return (
    <Carousel fade={true} interval={3000} controls={true}> {/* Enabled controls */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption-custom"> {/* Custom class for the caption */}
          <h4 className="custom-subheading">Micro Irrigation</h4> {/* Custom subheading */}
          <h3 className="custom-main-heading">More Crop Per Drop</h3> {/* Custom main heading */}
          <button className="custom-btn">Discover More</button> {/* Custom button */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h4 className="custom-subheading">Innovating Agriculture</h4>
          <h3 className="custom-main-heading">Solutions For Generations</h3>
          <button className="custom-btn">Discover More</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h4 className="custom-subheading">Sustainable Solutions</h4>
          <h3 className="custom-main-heading">Better Yields, Greater Profits</h3>
          <button className="custom-btn">Discover More</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default ImageCarousel;
