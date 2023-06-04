import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import MyFooter from "./components/MyFooter";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Service from "./components/Service";
import Skill from "./components/Skill";
import HeaderKu from "./components/header";
import { skills } from "./Data/dataSkill";
import { portfolios } from "./Data/dataPortfolio";

function App() {
  return (
    <div id="home">
      <HeaderKu />
      <HeroSection />
      <About />
      <Service />
      <Skill skills={skills} />
      <Resume />
      <Portfolio portfolios={portfolios} />
      <MyFooter />
    </div>
  );
}

export default App;
