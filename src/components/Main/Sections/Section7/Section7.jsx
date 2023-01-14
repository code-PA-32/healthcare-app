import "./section7.scss";
import { Button } from "@mui/material";
import logo from "../../../../assets/images/logo.png";

export const Section7 = () => {
  return (
    <section className="booking" id="booking">
      <div className="booking-wrapper">
        <div className="booking-wrapper-info">
          <h2>It’s time change your life today</h2>
          <Button variant="contained">Book an Appointment </Button>
        </div>
        <div className="booking-wrapper-image">
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};
