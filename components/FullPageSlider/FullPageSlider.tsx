import React, { useState } from "react";
import Image from "next/image";

const sliderItems = [
  {
    title: "Revolutionary token adoption and growth strategy",
    text:
      "Our mission is to enable more people experience the world, creating a self-sustainable and autonomous digital economy.",
    img:
      "https://infomedia.com/wp-content/cache/thumbnails/ian-dooley-281846-1000x600-c.jpg",
  },
  {
    title: "Revolutionary token adoption and growth strategy",
    text:
      "Our mission is to enable more people experience the world, creating a self-sustainable and autonomous digital economy.",
    img: "https://i.insider.com/5f1f1dcc3f73704b7a63d4c4",
  },
  {
    title: "Revolutionary token adoption and growth strategy",
    text:
      "Our mission is to enable more people experience the world, creating a self-sustainable and autonomous digital economy.",
    img:
      "https://infomedia.com/wp-content/cache/thumbnails/ian-dooley-281846-1000x600-c.jpg",
  },
  {
    title: "Revolutionary token adoption and growth strategy",
    text:
      "Our mission is to enable more people experience the world, creating a self-sustainable and autonomous digital economy.",
    img: "https://i.insider.com/5f1f1dcc3f73704b7a63d4c4",
  },
];

const FullPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = () => {
    if (slideIndex !== sliderItems.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <div className="sliderContainer">
      <div className="slider-controllers">
        <div className="slider_indicators">
          <b>
            {" "}
            {sliderItems.length < 10 ? "0" + (slideIndex + 1) : slideIndex + 1}
          </b>
          /
          {sliderItems.length < 10
            ? "0" + sliderItems.length
            : sliderItems.length}
        </div>
        <div className="arrows">
          <span onClick={prevSlide} className="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47.338"
              height="34.739"
              viewBox="0 0 47.338 34.739"
            >
              <g
                id="Icon_feather-arrow-right"
                data-name="Icon feather-arrow-right"
                transform="translate(3.536 1.768)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M51.3,18H7.5"
                  transform="translate(-7.5 -2.398)"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeLinejoin="round"
                  strokeWidth="5"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M33.6,7.5,18,23.1,33.6,38.7"
                  transform="translate(-18 -7.5)"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="5"
                />
              </g>
            </svg>
          </span>
          <span onClick={nextSlide} className="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47.338"
              height="34.739"
              viewBox="0 0 63.201 46.243"
            >
              <g
                id="Icon_feather-arrow-right"
                data-name="Icon feather-arrow-right"
                transform="translate(9.459 -5.379)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M7.5,18H66.459"
                  transform="translate(-16.959 10.5)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="6"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M18,7.5l21,21-21,21"
                  transform="translate(10.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="6"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      {sliderItems.map((item, i) => {
        return (
          <div
            key={i}
            className={
              i === slideIndex ? "slider_items active-anim" : "slider_items"
            }
          >
            <img className="slider_img" src={item.img} />
            <div className="bgBlur" />
            <div className="container">
              <div className="slider_textBox">
                <div className="slider_title">{item.title}</div>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FullPageSlider;
