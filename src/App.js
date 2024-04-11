import { lazy } from "react";
import "./App.css";

import ScrollUp from "./component/scroll/ScrollUp.jsx";

const Header = lazy(() => import("./component/header/Header.jsx"));
const Home = lazy(() => import("./component/home/Home.jsx"));
const About = lazy(() => import("./component/about/About.jsx"));
const Services = lazy(() => import("./component/services/Services.jsx"));
const Skills = lazy(() => import("./component/skills/Skills.jsx"));
const Qualification = lazy(() =>
  import("./component/qualification/Qualification.jsx")
);
const Contact = lazy(() => import("./component/contact/Contact.jsx"));
const Footer = lazy(() => import("./component/footer/Footer.jsx"));
const Work = lazy(() => import("./component/work/Work.jsx"));

function App() {
  
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
