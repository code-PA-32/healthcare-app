import "./header.scss";
import Button from "@mui/material/Button";
import { useState } from "react";

import {HeaderInfo} from "./AdvHeader/HeaderInfo";

export const Header = () => {
  const links = ["Home", "About", "Article", "Services"];
  const [active, setActive] = useState("Home");

  return (
    <header className="header">
      <div className="header-top">
        <h2 className="header-top-name">HEALTCARE.</h2>
        <nav className="header-top-nav">
          <ul className="header-top-nav-list">
            {links.map((item, i) => (
              <li
                className={`${active === item ? "active-link" : ""}`}
                key={item}
                onClick={(e) => setActive(item)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="contained" >
          Get Started
        </Button>
      </div>
      <HeaderInfo />
    </header>
  );
};
