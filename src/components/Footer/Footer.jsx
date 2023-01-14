import { Button } from "@mui/material";
import "./footer.scss";

export const Footer = (props) => {
  const {
    links,
    social,
    about,
    location: { address, phone },
  } = props.data.footer;
  return (
    <footer>
      <div className="contacts">
        <h2>HEALTHCARE.</h2>
        <p>{address}</p>
        <p>Contact us: {phone}</p>
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
        <input type="email" placeholder="Enter your email" />
        <Button
          type="submit"
          className="submit-button"
          variant="contained"
          onClick={(e) => e.preventDefault()}
        >
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
        <li key={i}>
          <a href={"#" + item.to}>{item.name}</a>
        </li>
      ))}
    </>
  );
};
