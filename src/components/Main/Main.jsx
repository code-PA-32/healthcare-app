import "./main.scss";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";

export const Main = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};
