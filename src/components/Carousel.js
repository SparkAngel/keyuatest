import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-first">
        <img alt="logopeople" className="carousel-first_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Deborah H.</p>
          <p className="carousel-first_about-text">
  “It is important to show your skills in a cover letter;
  I think you have already heard it before”. Only in this case,
  you will have an opportunity to prove your abilities in the interview.
  I decided to take the help of qualified professionals.
  My skills were demonstrated in the right way.”
          </p>
        </div>
      </div>
      <div className="carousel-second">
        <img alt="logopeople" className="carousel-second_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Cooper D.</p>
          <p className="carousel-first_about-text">
      “I always love a wide selection of something,
      and the CL has satisfied my needs in this case.
      Many variations of strengths and designs impressed me
      and made me push the matter through.
      And I did not regret my choice when
      the company sent me an offer for cooperation.”
          </p>
        </div>
      </div>
      <div className="carousel-first">
        <img alt="logopeople" className="carousel-first_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Deborah H.</p>
          <p className="carousel-first_about-text">
  “It is important to show your skills in a cover letter;
  I think you have already heard it before”. Only in this case,
  you will have an opportunity to prove your abilities in the interview.
  I decided to take the help of qualified professionals.
  My skills were demonstrated in the right way.”
          </p>
        </div>
      </div>
      <div className="carousel-second">
        <img alt="logopeople" className="carousel-second_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Cooper D.</p>
          <p className="carousel-first_about-text">
      “I always love a wide selection of something,
      and the CL has satisfied my needs in this case.
      Many variations of strengths and designs impressed me
      and made me push the matter through.
      And I did not regret my choice when
      the company sent me an offer for cooperation.”
          </p>
        </div>
      </div>
      <div className="carousel-first">
        <img alt="logopeople" className="carousel-first_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Deborah H.</p>
          <p className="carousel-first_about-text">
  “It is important to show your skills in a cover letter;
  I think you have already heard it before”. Only in this case,
  you will have an opportunity to prove your abilities in the interview.
  I decided to take the help of qualified professionals.
  My skills were demonstrated in the right way.”
          </p>
        </div>
      </div>
      <div className="carousel-second">
        <img alt="logopeople" className="carousel-second_logo" />
        <div className="carousel-first_about">
          <p className="carousel-first_about-name">Cooper D.</p>
          <p className="carousel-first_about-text">
      “I always love a wide selection of something,
      and the CL has satisfied my needs in this case.
      Many variations of strengths and designs impressed me
      and made me push the matter through.
      And I did not regret my choice when
      the company sent me an offer for cooperation.”
          </p>
        </div>
      </div>

    </Slider>
  );
};

export default Carousel;
