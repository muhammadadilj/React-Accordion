import React from "react";
import Accordion from "./components/accordion";
import AboutUs from "./content/aboutus";
import ContactUs from "./content/contactus";
import Projects from "./content/Projects";

const data = [
  { id: 1, name: "About Us", content: () => <AboutUs />, state: "active" },
  { id: 2, name: "Projects", content: () => <Projects />, state: "inactive" },
  {
    id: 3,
    name: "Contact Us",
    content: () => <ContactUs />,
    state: "inactive",
  },
];

function App() {
  return (
    <div className="container">
      <Accordion data={data} />
    </div>
  );
}

export default App;