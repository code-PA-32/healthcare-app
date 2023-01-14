import { Button } from "@mui/material";
import {
  Hearts,
  Location,
  Star,
  CheckMark,
  ArrowRight,
} from "../../../../assets/media/MediaIcons";
import feedback from "../../../../assets/images/feedback2.png";
import "./section2.scss";

export const Section2 = (props) => {
  const { doctors, list } = props.data;
  console.log(doctors);
  return (
    <section className="doctor" id="about">
      <div className="doctor-left">
        <div className="overflow-box">
          <img src={doctors[0].photo} alt="doctor" />
        </div>
        <Rate data={doctors} />
        <Skeleton />
      </div>

      <div className="doctor-right">
        <h2>Best quality service with our experience doctors</h2>
        <p>
          With our top doctors, we are able to provide best medical services
          above average We have highly experienced doctors, so don't worry They
          are also very talented in their fields
        </p>
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <CheckMark />
              &nbsp;&nbsp;
              {item}
            </li>
          ))}
        </ul>
        <Button variant="contained">
          <a href="#doctors">
            Explore specialists&nbsp; <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
};

const Rate = (props) => {
  const { photo, name, spec, rating, exp, patients, reviews, location } =
    props.data[0];
  return (
    <div className="doctor-left-rate">
      <div className="heart">{<Hearts />}</div>
      <div className="doctor-left-rate-info">
        <img src={photo} alt="doctor" />
        <div className="doctor-left-rate-info-name">
          <h4>{name}</h4>
          <span>{spec} </span>
          <span>
            <Star /> {rating}
          </span>
        </div>
      </div>
      <ul>
        <li>
          <span>Experience</span> <span>{exp}</span>
        </li>
        <li>
          <span>Patients</span> <span>{patients}K</span>
        </li>
        <li>
          <span>Reviews</span>
          <span>{reviews}K</span>
        </li>
      </ul>
      <div className="doctor-left-rate-location">
        <Location /> {location}
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="doctor-left-skeleton">
      <img src={feedback} alt="" />
      <span className="wave-box">
        <span className="wave wave-1"></span>
        <span className="wave wave-2"></span>
        <span className="wave wave-3"></span>
      </span>
    </div>
  );
};
