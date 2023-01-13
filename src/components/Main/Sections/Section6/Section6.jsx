import { useState } from "react";

import "./section6.scss";
import av1 from "../../../../assets/images/avatar1.png";
import av2 from "../../../../assets/images/avatar2.png";
import av3 from "../../../../assets/images/avatar3.png";
import av4 from "../../../../assets/images/avatar4.png";
import av5 from "../../../../assets/images/avatar5.png";
import av6 from "../../../../assets/images/avatar6.png";
import {
  Star,
  Quotes,
  ArrowRight,
  PrevFade,
} from "../../../../assets/media/MediaIcons";

const clientsComments = [
  {
    avatar: av1,
    name: "Alex Maxwell",
    location: "San Francisco, USA",
    stars: 5,
    comment:
      "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.",
  },
  {
    avatar: av2,
    name: "Alan Zara",
    location: "New York, USA",
    stars: 5,
    comment:
      "Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country where virtual chamber can create at anywhere throughout country",
  },
  {
    avatar: av4,
    name: "Arnuad	Circuitt",
    location: "San Francisco, USA",
    stars: 5,
    comment:
      "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.",
  },
  {
    avatar: av3,
    name: "Jeth	McCullogh",
    location: "San Francisco, USA",
    stars: 5,
    comment: `HealthCare is enlightens my superpower each and every time...!
      I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface.
      Thank you).`,
  },
  {
    avatar: av5,
    name: "Cherise	McIlharga",
    location: "Las Terrenas, USA",
    stars: 5,
    comment:
      "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.",
  },
  {
    avatar: av6,
    name: "	Kathe	Suggey",
    location: "San Francisco, USA",
    stars: 5,
    comment:
      "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.",
  },
];

export const Section6 = () => {
  return (
    <section className="comments">
      <h2>Look what our Clients have told about us</h2>

      <Slider data={clientsComments} />
    </section>
  );
};
// {currentIndex === images.length - 1 ? <NextFade /> : <NextActive />} next
// {currentIndex === 0 ? <PrevFade /> : <PrevActive />} prev
const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);


  return (
    <div className="comments-slider">
      <ul
        className="comments-slider-slides"
        style={{
          transform: `translate3d(${
            -currentIndex * 370 - currentIndex * 30
          }px, 0, 0)`,
        }}
      >
        {data.map((item, i) => (
          <li
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="comments-slider-slides-slide"
          >
            <div className="quotes">
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
    </div>
  );
};
