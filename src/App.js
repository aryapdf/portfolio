import "./App.css";
import Skills from "./component/skills/Skills.jsx";
import About from "./component/about/About.jsx";
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home.jsx";
import Services from "./component/services/Services.jsx";
import Qualification from "./component/qualification/Qualification.jsx";
import Contact from "./component/contact/Contact.jsx";
import Footer from "./component/footer/Footer.jsx";
import ScrollUp from "./component/scroll/ScrollUp.jsx";
import Work from "./component/work/Work.jsx";

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
