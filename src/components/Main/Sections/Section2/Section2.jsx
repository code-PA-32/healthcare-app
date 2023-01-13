import doctor from "../../../../assets/images/main-doctor.png";
import {
  Hearts,
  Location,
  Star,
  CheckMark,
  ArrowRight,
} from "../../../../assets/media/MediaIcons";
import feedback from "../../../../assets/images/feedback2.png";
import { Button } from "@mui/material";

import "./section2.scss";

export const Section2 = () => {
  const listData = [
    "Search your specialist & Online consultations anywhere",
    "Consultation our top specialists",
    "Doctors are available 24/7",
  ];
  return (
    <section className="doctor">
      <div className="doctor-left">
        <div className="overflow-box">
          <img src={doctor} alt="doctor" />
        </div>
        <Rate />
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
          {listData.map((item, i) => (
            <li key={i}>
              <CheckMark />
              &nbsp;&nbsp;
              {item}
            </li>
          ))}
        </ul>
        <Button variant="contained">
          Explore specialists&nbsp; <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

const Rate = () => {
  return (
    <div className="doctor-left-rate">
      <div className="heart">{<Hearts />}</div>
      <div className="doctor-left-rate-info">
        <img src={doctor} alt="doctor" />
        <div className="doctor-left-rate-info-name">
          <h4>Dr. Khalid Abbed</h4>
          <span>Carddiologist (MBBS) </span>
          <span>
            <Star /> 5.0
          </span>
        </div>
      </div>
      <ul>
        <li>
          <span>Experience</span> <span>5 Years</span>
        </li>
        <li>
          <span>Patients</span> <span>3.4K</span>
        </li>
        <li>
          <span>Reviews</span>
          <span>2.4K</span>
        </li>
      </ul>
      <div className="doctor-left-rate-location">
        <Location /> Mayo Clinic Hospital
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
