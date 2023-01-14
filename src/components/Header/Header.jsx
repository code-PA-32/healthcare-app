import { useState, useRef, useEffect } from "react";
import { HeaderInfo } from "./AdvHeader/HeaderInfo";
import Button from "@mui/material/Button";

import "./header.scss";

export const Header = (props) => {
  const { links, locations, happyClients } = props.data.header;
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState('');
  const containerRef = useRef(null);
  const topHeaderRef = useRef();

  const callbackFN = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };


  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFN, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      setHeight(parseInt(getComputedStyle(topHeaderRef.current).height));
    }

    return () => {
      if (containerRef.current) {


        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  console.log(visible, height);

  return (
    <header
      className="header"
      ref={containerRef}
      style={visible ? {} : { marginBottom: height }}
    >
      <div
        className={
          visible ? "header-top" : "header-top_intersecting header-top"
        }
        style={
          visible
            ? {}
            : {
              top: -height,
                transform: `translateY(100%)`,
              }
        }
        ref={topHeaderRef}
      >
        <h2 className="header-top-name">HEALTHCARE.</h2>
        <nav className="header-top-nav">
          <ul className="header-top-nav-list">
            {links.map((item) => (
              <li
                className={`${active === item.name ? "active-link" : ""}`}
                key={item.name}
                onClick={() => setActive(item.name)}
              >
                <a href={'#' + item.to}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="contained"><a href="#booking">Get Started</a></Button>
      </div>
      <HeaderInfo locations={locations} clients={happyClients} />
    </header>
  );
};
