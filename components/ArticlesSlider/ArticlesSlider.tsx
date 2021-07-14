import React, { useState } from "react";

// const sliderItems = [1, 2, 3, 4, 5, 6, 7, 8];

const ArticlesSlider = () => {
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const [sliderItems, setSliderItems] = useState([
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img: "./img/Mask Group 3.png",
    },
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img:
        "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img: "./img/Mask Group 3.png",
    },
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img:
        "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img: "./img/Mask Group 3.png",
    },
    {
      title: "Bitcoin is down, our IEO is stable",
      categoryName: "MARKETING",
      text:
        "With the volatility in crypto markets illustrated today with Bitcoin dipping down to $30k in a matter of minutes you may feel nervous.",
      img:
        "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ]);

  const setSliderClassName = (i: number) => {
    let name = "ArticlesSlider_sliderItem";
    if (i === activeIndex) {
      name = name + " " + "active";
    }
    if (i !== activeIndex && i !== activeIndex + 1) {
      name = name + " " + "hide-right";
    }

    return name;
  };

  const nestSlide = () => {
    // if (sliderItems.length - 1 === activeIndex) {
    //   debugger;
    //   let firs: any = sliderItems[1];
    //   let newArr: any = [...sliderItems];
    //   setSliderItems([...newArr.shift(), firs]);
    // }
    if (sliderItems.length - 1 !== activeIndex) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div className="ArticlesSlider_wrapper">
      <div className="controllers">
        <span className="prev" onClick={() => prevSlide()}>
          <svg
            style={{ transform: "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="45.714"
            height="33.378"
            viewBox="0 0 45.714 33.378"
          >
            <g
              id="Icon_feather-arrow-right"
              data-name="Icon feather-arrow-right"
              transform="translate(9.459 -6.086)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M7.5,18H50.385"
                transform="translate(-16.959 4.775)"
                fill="none"
                stroke="#032087"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M18,7.5,33.275,22.775,18,38.05"
                transform="translate(0.152)"
                fill="none"
                stroke="#032087"
                strokeWidth="4"
              />
            </g>
          </svg>
        </span>
        <span className="next" onClick={() => nestSlide()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.714"
            height="33.378"
            viewBox="0 0 45.714 33.378"
          >
            <g
              id="Icon_feather-arrow-right"
              data-name="Icon feather-arrow-right"
              transform="translate(9.459 -6.086)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M7.5,18H50.385"
                transform="translate(-16.959 4.775)"
                fill="none"
                stroke="#032087"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M18,7.5,33.275,22.775,18,38.05"
                transform="translate(0.152)"
                fill="none"
                stroke="#032087"
                strokeWidth="4"
              />
            </g>
          </svg>
        </span>
      </div>
      <div className="ArticlesSlider">
        {sliderItems.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={setSliderClassName(i)}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              <div className="content">
                <img src={item.img} />
                <h4>{item.title}</h4>
                <div> {item.categoryName} </div>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesSlider;
