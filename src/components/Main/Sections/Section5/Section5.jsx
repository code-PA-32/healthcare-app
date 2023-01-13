import "./section5.scss";
import mobile from "../../../../assets/images/main-mobile.png";
import { GoogleStore, AppleStore } from "../../../../assets/media/MediaIcons";

export const Section5 = () => {
  return (
    <section className="mobile_app">
      <div className="mobile_app-image">
        <img src={mobile} alt="mobile" />
      </div>
      <div className="mobile_app-description">
        <h2>Mobile apps are available Get HealthCare for free!</h2>
        <p>
          Get on-demand access to a doctor on your phone with the free
          HealthCare mobile app. Download and register on our app for free and
          feel safe for all your family
        </p>
        <div className="app_links">
          <AppleStore />
          <GoogleStore />
        </div>
      </div>
    </section>
  );
};
