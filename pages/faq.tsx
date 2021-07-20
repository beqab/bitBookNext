import React, { useState } from "react";
import classnames from "classnames";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import FaqSvg from "../components/svgComponents/faq";

const questionsData = [
  {
    question: "Travelling with children",
    answer: (
      <>
        <p>Travelling solo</p>
        <p>
          <b>I’m travelling alone – is that OK?</b>
        </p>
        <p>
          This is the beauty of the Intrepid style of travel: many of our
          travellers join because they are travelling solo and want to meet and
          share experiences with like-minded people. Find out more
        </p>
        <p>
          <b>If I am travelling solo, will I be charged a single supplement?</b>
        </p>
        <p>
          As a solo traveller, you will be paired up with another passenger of
          the same gender as per your passport information. If you’re not
          comfortable sharing a room with someone of the same gender, you also
          have the choice to pay for a single supplement (available on the
          majority of our trips).
        </p>
      </>
    ),
  },
  {
    question: "Travelling in a group",
    answer: (
      <>
        <p>Travelling solo</p>
        <p>
          <b>I’m travelling alone – is that OK?</b>
        </p>
        <p>
          This is the beauty of the Intrepid style of travel: many of our
          travellers join because they are travelling solo and want to meet and
          share experiences with like-minded people. Find out more
        </p>

        <p>
          As a solo traveller, you will be paired up with another passenger of
          the same gender as per your passport information. If you’re not
          comfortable sharing a room with someone of the same gender, you also
          have the choice to pay for a single supplement (available on the
          majority of our trips).
        </p>
      </>
    ),
  },
  {
    question: "Travelling solo",
    answer: (
      <>
        <p>Travelling solo</p>

        <p>
          This is the beauty of the Intrepid style of travel: many of our
          travellers join because they are travelling solo and want to meet and
          share experiences with like-minded people. Find out more
        </p>
        <p>
          <b>If I am travelling solo, will I be charged a single supplement?</b>
        </p>
        <p>
          As a solo traveller, you will be paired up with another passenger of
          the same gender as per your passport information. If you’re not
          comfortable sharing a room with someone of the same gender, you also
          have the ch
        </p>
      </>
    ),
  },
];

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState("");

  const setQuestion = (question: string) => {
    if (activeQuestion === question) {
      setActiveQuestion("");
    } else {
      setActiveQuestion(question);
    }
  };

  return (
    <div className="faq">
      <Header />
      <div className="faq_topSection">
        {/* {FaqSvg} */}
        <FaqSvg />
      </div>
      <div className="faq_content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Choosing a trip</h4>

              {questionsData.map((item, i) => {
                return (
                  <div
                    onClick={() => setQuestion(item.question)}
                    className={classnames("questionContainer", {
                      active: activeQuestion === item.question,
                    })}
                  >
                    <div className="question">
                      <span>{item.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.179"
                        height="10.857"
                        viewBox="0 0 18.179 10.857"
                      >
                        <path
                          id="Path_614"
                          data-name="Path 614"
                          d="M-3638,4744l8.206,8.206,8.206-8.206"
                          transform="translate(3638.885 -4743.116)"
                          fill="none"
                          stroke="#032087"
                          stroke-width="2.5"
                        />
                      </svg>
                    </div>

                    <div className="answer">{item.answer}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
