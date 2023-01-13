import calendar from "../../../../assets/images/calendar.png";
import search from "../../../../assets/images/search.png";
import phone from "../../../../assets/images/health-phone.png";

import './section1.scss'

export const Section1 = () => {
  const data = [
    {
      img: search,
      h3: "Find best doctor’s",
      p: "Find your doctor easily with a minimum of effort. We've kept everything organised for you.",
      id: 1,
    },
    {
      img: calendar,
      h3: "Get Appointment",
      p: "Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.",
      id: 2,
    },
    {
      img: phone,
      h3: "Happy Consultations",
      p: "Do consultations and  take the service based on your appointment. Get back to good health",
      id: 3,
    },
  ];

  return (
    <section className="solution">
      <h2>3 Easy Steps and Get Your Solution</h2>
      <div className="solution-list">
        <ul>
          {data.map((item) => (
            <Item data={item} key={item.h3} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Item = ({ data }) => {
  const { img, h3, p, id } = data;
  return (
    <li>
      <div className={`item item-${id}`}>
        <img src={img} alt="section1" />
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </li>
  );
};
