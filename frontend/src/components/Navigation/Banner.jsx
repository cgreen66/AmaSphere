import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BMW from '/Users/christopher/AmaSphere/public/images/Logo_BMW_Motorrad_2021.svg-e80a2eeb.png';
import Ducati from '/Users/christopher/AmaSphere/public/images/Ducati-logo-d357ffef.png';
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
          <img src={Ducati} alt="Ducati" />
        </div>
        <div>
          <img src={BMW} alt="BMW Motorrad" />
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
