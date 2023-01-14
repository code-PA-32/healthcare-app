import { useState } from "react";
import "./section3.scss";

export const Section3 = (props) => {
  const { list } = props.data;

  return (
    <section className="services" id="services">
      <h2>Our Service</h2>
      <p className="services-info">
        Our doctors have high qualified skills and are guaranteed to help you
        recover from your disease.
      </p>
      <Slider data={list} />
    </section>
  );
};

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="slideshow">
      <ul
        className="topSlide-slider"
        style={{
          transform: `translate3d(${
            -currentIndex * 350 - currentIndex * 60
          }px, 0, 0)`,
        }}
      >
        {data.map((item, i) => (
          <li
            className={`${currentIndex === i ? `slide slide-active` : "slide"}`}
            key={i}
            onClick={() => setCurrentIndex(i)}
          >
            <div>{item.img}</div>
            <h5>{item.h5}</h5>
            <p>{item.p}</p>
          </li>
        ))}
      </ul>
      <div className="dots">
        {data.map((_, i) => (
          <div
            key={i}
            className={currentIndex === i ? "dot dot-active" : "dot"}
            onClick={() => setCurrentIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
