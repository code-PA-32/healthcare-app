import "./main.scss";
import { Section1 } from "./Sections/Section1/Section1";
import { Section2 } from "./Sections/Section2/Section2";
import { Section3 } from "./Sections/Section3/Section3";
import { Section4 } from "./Sections/Section4/Section4";
import { Section5 } from "./Sections/Section5/Section5";
import { Section6 } from "./Sections/Section6/Section6";
import { Section7 } from "./Sections/Section7/Section7";

export const Main = (props) => {
    const {section1,section2, section3,section4, section6} = props.data.main

  return (
    <main>
      <Section1 data={section1}/>
      <Section2 data={section2}/>
      <Section3 data={section3}/>
      <Section4 data={section4}/>
      <Section5 />
      <Section6 data={section6}/>
      <Section7 />
    </main>
  );
};
