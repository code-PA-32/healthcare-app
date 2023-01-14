import "./App.scss";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { data } from "../../data/data";

const App = () => {
  return (
    <>
      <Header  data={data}/>
      <Main data={data}/>
      <Footer data={data}/>
    </>
  );
};

export default App;
