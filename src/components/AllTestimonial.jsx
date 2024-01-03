import React from "react";
import styled from "styled-components";
import Testimonail from "./Testimonail";
import Testimonaillist from "../assets/json/dummyData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <AllTestimonial>
      <section className="container">
        <section>
          <section>
            <strong>Clients Feedback</strong>
            <h1>Customers Testimonials</h1>
          </section>

          <div className="flex">
            <Slider {...settings}>
              {Testimonaillist.map((testy) => (
                <Testimonail
                  img={testy.img}
                  name={testy.name}
                  title={testy.title}
                  word={testy.word}
                />
              ))}
            </Slider>
          </div>
        </section>
      </section>
    </AllTestimonial>
  );
};

export default TestimonialPage;

let AllTestimonial = styled.div`
  background-color: #f5fcff;

  h1 {
    font-size: 40px;
    margin: 20px 0;
  }

  section {
    padding: 40px 0;
  }
`;
