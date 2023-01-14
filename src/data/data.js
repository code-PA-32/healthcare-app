import calendar from "../assets/images/calendar.png";
import search from "../assets/images/search.png";
import phone from "../assets/images/health-phone.png";
import doctor from "../assets/images/main-doctor.png";
import { Cardio, Blood, Langs, Medicine } from "../assets/media/MediaIcons";
import doc1 from "../assets/images/slide-doctor1.png";
import doc2 from "../assets/images/slide-doctor2.png";
import doc3 from "../assets/images/slide-doctor3.png";
import doc4 from "../assets/images/slide-doctor4.png";
import doc5 from "../assets/images/slide-doctor5.jpg";
import doc6 from "../assets/images/slide-doctor6.jpg";
import doc7 from "../assets/images/slide-doctor7.jpeg";
import doc8 from "../assets/images/slide-doctor8.png";

import av1 from "../assets/images/avatar1.png";
import av2 from "../assets/images/avatar2.png";
import av3 from "../assets/images/avatar3.png";
import av4 from "../assets/images/avatar4.png";
import av5 from "../assets/images/avatar5.png";
import av6 from "../assets/images/avatar6.png";

import {
  FaceBook,
  Instagram,
  Twitter,
  YouTube,
} from "../assets/media/MediaIcons";

export const data = {
  header: {
    links: [
      { name: "Home", to: "" },
      { name: "About", to: "about" },
      { name: "Article", to: "article" },
      { name: "Services", to: "services" },
    ],
    locations: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      " New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    happyClients: 2500,
  },
  main: {
    section1: {
      solutions: [
        {
          img: search,
          h3: "Find best doctor’s",
          p: "Find your doctor easily with a minimum of effort. We've kept everything organized for you.",
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
      ],
    },
    section2: {
      list: [
        "Search your specialist & Online consultations anywhere",
        "Consultation our top specialists",
        "Doctors are available 24/7",
      ],
      doctors: [
        {
          id: 1,
          photo: doctor,
          name: "Dr. Khalid Abbed",
          spec: "Cardiologist (MBBS)",
          rating: "5.0",
          exp: "5 Years",
          patients: "3.4",
          reviews: "2.3",
          location: "Mayo Clinic Hospital",
        },
      ],
    },
    section3: {
      list: [
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
      ],
    },
    section4: {
      doctorsList: [
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
        {
          img: doc5,
          name: "Dr Cristina Watsons",
          position: "Nurse",
        },
        {
          img: doc6,
          name: "Dr John Smith",
          position: "Pharmacist",
        },
        {
          img: doc7,
          name: "Dr Alex Jamison",
          position: "Psychologist",
        },
        {
          img: doc8,
          name: "Dr Amanda Smith",
          position: "Family doctor",
        },
      ],
    },
    section6: {
      comments: [
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
      ],
    },
  },
  footer: {
    location: {
      address: "Metairie, 3689 Bassel Street, LA, Louisiana",
      phone: "225-788-5489",
    },
    links: [
      { name: "Home", to: "" },
      { name: "About", to: "about" },
      { name: "Services", to: "services" },
      { name: "Article", to: "article" },
      { name: "Reviews", to: "comments" },
    ],
    social: [<FaceBook />, <Instagram />, <Twitter />, <YouTube />],
    about: [
      { name: "About", to: "" },
      { name: "Partners", to: "" },
      { name: "Careers", to: "" },
      { name: "Press", to: "" },
      { name: "Community", to: "" },
    ],
  },
};
