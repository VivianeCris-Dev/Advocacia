import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import AreasOfActivity from "./pages/AreasOfActivity";
import Partners from "./pages/Partners";
import Customers from "./pages/Customers";
import TalkToUs from "./pages/TalkToUs";
import Footer from "./components/Footer";

function App() {
  const [wasClicked, setWasClicked] = useState("");

  useEffect(() => {
    if (wasClicked) {
      const section = document.querySelector(wasClicked);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [wasClicked]);

  const menuItems = [
    { label: "Início", href: "#home", id: "1" },
    { label: "Sobre", href: "#abaut", id: "2" },
    { label: "Áreas de atuação", href: "#areas", id: "3" },
    { label: "Sócios", href: "#partners", id: "4" },
    { label: "Nossos Clientes", href: "#customers", id: "5" },
  ];

  return (
    <div>
      <Header
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
        menuItems={menuItems}
      />
      <Home />
      <About />
      <AreasOfActivity setWasClicked={setWasClicked} />
      <Partners />
      <Customers />
      <TalkToUs />
      <Footer
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
