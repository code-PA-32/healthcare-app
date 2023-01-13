import { useState } from "react";

import {
  Cardio,
  Blood,
  Langs,
  Medicine,
} from "../../../assets/media/MediaIcons";

export const Section3 = () => {
  const slideData = [
    {
      img: <Cardio />,
      h5: "Cardiology",
      p: `Our cardiologists are skilled at  the diagnosing and treating diseases
            of the cardiovascular system.`,
    },
    {
      img: <Blood />,
      h5: "Blood",
      p: `Your blood is made up of liquid and solids. The liquid part, called plasma, is made of water, salts, and protein. `,
    },
    {
      img: <Langs />,
      h5: "Pulmonology",
      p: `Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.`,
    },
    {
      img: <Medicine />,
      h5: "Medicine",
      p: `Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system.`,
    },
  ];

  return (
    <section className="services">
      <h2>Our Service</h2>
      <p>
        Our doctors have high qualified skills and are guaranteed to help you
        recover from your disease.
      </p>

      <Slider data={slideData} />
    </section>
  );
};

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="slideshow">
      <ul
        className="topSlide-slider"
        style={{ transform: `translate3d(${-currentIndex * 350 - (currentIndex * 20)}px, 0, 0)` }}
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
          <div key={i} className={currentIndex === i ? 'dot dot-active' : 'dot'} onClick={() => setCurrentIndex(i)}>
            
          </div>
        ))}
      </div>
    </div>
  );
};

