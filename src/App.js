import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.scss";
import "./Mobile.scss";
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <h1 id="name">Steve Edelstein</h1>
      <h4 id="subheading">color photography</h4>
      <Tabs defaultActiveKey="gallery1" id="uncontrolled-tab-example">
        <Tab eventKey="gallery1" title="Gallery(1)">
          <Gallery tab="one"/>
        </Tab>
        <Tab eventKey="gallery2" title="Gallery(2)">
          <Gallery tab="two"/>
        </Tab>
        <Tab eventKey="about" title="About">
          <About/>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Contact/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;