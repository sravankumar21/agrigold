import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/green background.jpg';
import img2 from '../images/betterworld.jpg';
import img3 from '../images/green2.jpg';
import img4 from '../images/paddyimage.jpg';
import img5 from '../images/wallpaper3.jpg';
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

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img4}
          alt="Fourth slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h4 className="custom-subheading">Join Us in Growth</h4>
          <h3 className="custom-main-heading">One Joint Tour With Nature</h3>
          <button className="custom-btn">Discover More</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img5}
          alt="Fifth slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h4 className="custom-subheading">Empowering Farmers</h4>
          <h3 className="custom-main-heading">One Stop - Agri Solutions</h3>
          <button className="custom-btn">Discover More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
