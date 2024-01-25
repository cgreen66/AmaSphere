import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          {/* Use the imported images here */}
          <img src='https://amasphere-seeds1.s3.amazonaws.com/Screenshot+2024-01-22+at+10.22.02+AM.png' alt="Ducati" />
        </div>
        <div>
          <img src='https://amasphere-seeds1.s3.amazonaws.com/Logo_BMW_Motorrad_2021.svg.png' alt="BMW Motorrad" />
        </div>
        {/* <div>
          <img src={yamaha} alt="Yamaha" />
        </div>
        <div>
          <img src={mv} alt="MV Agusta" />
        </div> */}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-arrow next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="arrow-icon">›</i>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-arrow prev-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="arrow-icon">‹</i>
      </div>
    );
  }
  

export default Banner;
