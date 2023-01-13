import { Button } from "@mui/material";

import "./section4.scss";
import {
  FaceBookColor,
  TwitterColor,
  LinkedInColor,
} from "../../../../assets/media/MediaIcons";

import doc1 from "../../../../assets/images/slide-doctor1.png";
import doc2 from "../../../../assets/images/slide-doctor2.png";
import doc3 from "../../../../assets/images/slide-doctor3.png";
import doc4 from "../../../../assets/images/slide-doctor4.png";

export const Section4 = () => {
  const doctorsData = [
    {
      img: doc1,
      name: "Dr. Alisa Rahman",
      position: "Cardiologist Specialist",
    },
    {
      img: doc2,
      name: "Dr. Anthony Fauci",
      position: "Neurology Specialist",
    },
    {
      img: doc3,
      name: "Dr. Khalid Abbed",
      position: "Cancer Specialist",
    },
    {
      img: doc4,
      name: "Dr Amanda Linda ",
      position: "Dentist Specialist",
    },
  ];

  return (
    <section className="doctors_list">
      <h2>Meet Our Certified Online Doctors</h2>
      <i className="i_outer"></i>
      <p>
        Our online doctors have an average of 15 years experience and a 98%
        satisfaction rating, they really set us apart!
      </p>
      <ul className="doctors_list-list">
        {doctorsData.map((item, i) => (
          <DoctorCard data={item} key={i} />
        ))}
      </ul>
      <Button variant="contained"> Explore All Doctors </Button>
    </section>
  );
};

const DoctorCard = ({ data }) => {
  const { img, name, position } = data;

  return (
    <li className="doctors_list-list-item">
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
  );
};
