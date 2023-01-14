import { Button } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./section4.scss";
import {
  FaceBookColor,
  TwitterColor,
  LinkedInColor,
} from "../../../../assets/media/MediaIcons";

export const Section4 = (props) => {
  const [show, setShow] = useState(4);
  const { doctorsList } = props.data;

  return (
    <section className="doctors_list" id="doctors">
      <h2>Meet Our Certified Online Doctors</h2>
      <i className="i_outer"></i>
      <p>
        Our online doctors have an average of 15 years experience and a 98%
        satisfaction rating, they really set us apart!
      </p>
      <TransitionGroup component={"ul"} className="doctors_list-list">
        {doctorsList.slice(0, show).map((item, i) => {
          const { img, name, position } = item;
          return (
            <CSSTransition
              key={i}
              timeout={500}
              classNames={"doctors_list-list-item fade"}
            >
              <li className="doctors_list-list-item fade">
                <img src={img} alt="doctor" />
                <h5>{name}</h5>
                <span>{position}</span>
                <ul>
                  <li>
                    <FaceBookColor />
                  </li>
                  <li>
                    <TwitterColor />
                  </li>
                  <li>
                    <LinkedInColor />
                  </li>
                </ul>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>

        <Button
          variant="contained"
          onClick={() => {
            show === 4 ? setShow(doctorsList.length) : setShow(4);
          }}
        >
          {show === 4 ? "Explore All Doctors" : "Show Less"}
        </Button>
    </section>
  );
};
