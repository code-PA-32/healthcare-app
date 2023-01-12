import { Button } from "@mui/material";
import { useState } from "react";
import {
  Location,
  SearchIconHeader,
  ChatPhone,
  Discussion,
  VideoCall,
  Star,
} from "../../../assets/media/MediaIcons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import doctor from "../../../assets/images/header-doctor1.png";
import heart from "../../../assets/images/heart.png";
import feedback from "../../../assets/images/feedback1.png";

export const HeaderInfo = () => {
  const locationList = [
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
  ];
  const logos = [<ChatPhone />, <Discussion />, <VideoCall />];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 210,
      },
    },
  };
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="header-info">
      <div className="header-info-left">
        <h1 className="header-info-left-prev">
          Find And Search Your <span> Suitable Doctor’s </span>
        </h1>
        <p className="header-info-left-info">
          Join us and take care of yourself and your family with health services
          that will make you feel confident and safe in your daily life.
        </p>
        <form name="search" className="header_form">
          <input
            type="text"
            name="search"
            placeholder="Find your doctor"
            className="header_form-search"
          />
          <FormControl className="header_form-select">
            <InputLabel sx={{ display: "flex", border: 'none', alignItems: "center" }}>
              {<Location />}&#160;&#160;Location&#160;&#160;&#160;
            </InputLabel>
            <Select
              sx={{
                width: 210,
                background: "rgba(245, 246, 250, 0.52)",
              }}
              MenuProps={MenuProps}
              value={location}
              label=" &#160;&#160;&#160;Location&#160;&#160;&#160;"
              onChange={handleChange}
            >
              {locationList.map((item) => (
                <MenuItem key={item} value={item}>
                  {<Location />}&#160;&#160;
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" disableElevation>
            <SearchIconHeader />
          </Button>
        </form>
      </div>

      <div className="header-info-right">
        <img src={doctor} alt="doctor" />
        {logos.map((item, i) => (
          <div key={i} className={`callback header-info-right-logo-${i + 1}`}>
            {item}
          </div>
        ))}
        {<HappyClient />}
        {<Feedback />}
      </div>
    </div>
  );
};

const HappyClient = () => {
  return (
    <div className="header-info-right-client">
      <img src={heart} alt="heart" className="header-info-right-client-pulse" />
      <h3>2500+</h3>
      <p>Happy Patients</p>
    </div>
  );
};

export const Feedback = () => {
  return (
    <div className="header-info-right-feedback">
      <img src={feedback} alt="avatar" />
      <div className="feedback-text">
        <div className="stars">
          {Array(5)
            .fill(<Star />)
            .map((item, i) => (
              <div key={i}>{item}</div>
            ))}
        </div>
        <span className="skeleton "></span>
        <span className="skeleton second"></span>
      </div>
    </div>
  );
};
