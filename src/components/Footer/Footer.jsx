import "./footer.scss";
import { Button } from "@mui/material";
import {
  FaceBook,
  Instagram,
  Twitter,
  YouTube,
} from "../../assets/media/MediaIcons";
const links = ["Category", "Home", "About", "Services", "Reviews", "Article"];
const social = [<FaceBook />, <Instagram />, <Twitter />, <YouTube />];
const about = ["About", "Partners", "Careers", "Press", "Community"];

export const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <h2>HEALTCARE.</h2>
        <p>Metairie, 3689 Bassel Street, LA, Louisiana</p>
        <p>Contact us: 225-788-5489</p>
        <ul className="contacts-social-list">
          <List data={social} />
        </ul>
      </div>
      <ul className="links">
        <List data={links} />
      </ul>
      <ul className="about">
        <List data={about} />
      </ul>
      <form name="news">
        <h6>Subscribe newsletter</h6>
        <span>Sign up for tips, new destinations, and exclusive promos.</span>
        <input type="text" placeholder="Enter your email" />
        <Button type="submit" className="submit-button" variant="contained">
          Subscribe
        </Button>
      </form>
    </footer>
  );
};

const List = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
};
