import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import MyFooter from "./components/MyFooter";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

import Skill from "./components/Skill";
import HeaderKu from "./components/header";
import { skills } from "./Data/dataSkill";
import { portfolios } from "./Data/dataPortfolio";
import Certifcate from "./components/Certifcate";

function App() {
  return (
    <div id="home">
      <HeaderKu />
      <HeroSection />
      <About />
      <Skill skills={skills} />
      <Resume />
      <Certifcate />
      <Portfolio portfolios={portfolios} />
      <MyFooter />
    </div>
  );
}

export default App;
