import { useState, useEffect } from "react";
import "./section6.scss";
import { Star, Quotes } from "../../../../assets/media/MediaIcons";

export const Section6 = (props) => {
  const { comments } = props.data;
  return (
    <section className="comments" id="comments">
      <h2>Look what our Clients have told about us</h2>
      <Slider data={comments} />
    </section>
  );
};
const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      currentIndex === data.length - 1 ? setCurrentIndex(0) :
      setCurrentIndex(currentIndex + 1);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, data.length]);

  return (
    <div className="comments-slider">
      <ul
        className="comments-slider-slides"
        style={{
          transform: `translate3d(${
            -currentIndex * 350 - currentIndex * 30
          }px, 0, 0)`,
        }}
      >
        {data.map((item, i) => (
          <li
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={currentIndex === i + 2 || currentIndex === i - 2 ? 'comments-slider-slides-slide faded_slide' : 'comments-slider-slides-slide'}
          >
            <div className={currentIndex === i ? 'quotes quotes_active' : 'quotes'}>
              <Quotes />
            </div>
            <img src={item.avatar} alt="avatar" />
            <div className="comment_info">
              <div className="comment_name_location">
                <span>{item.name}</span>
                <span className="comment_location">{item.location}</span>
              </div>
              <span className="comment_stars">
                {Array(item.stars)
                  .fill(<Star />)
                  .map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
              </span>
            </div>
            <div className="comment_text">{item.comment}</div>
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
