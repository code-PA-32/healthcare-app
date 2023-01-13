import "./main.scss";
import { Section4 } from "./Section4/Section4";
import { Section1 } from "./Sections/Section1/Section1";
import { Section2 } from "./Sections/Section2/Section2";
import { Section3 } from "./Sections/Section3/Section3";

export const Main = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
};
