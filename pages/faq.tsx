import React from "react";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import FaqSvg from "../components/svgComponents/faq";

const Faq = () => {
  return (
    <div className="faq">
      <Header />
      <div className="faq_topSection">
        {/* {FaqSvg} */}
        <FaqSvg />
      </div>
      <div className="faq_content">fsd</div>

      <Footer />
    </div>
  );
};

export default Faq;
