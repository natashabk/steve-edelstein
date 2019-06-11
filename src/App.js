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
      <Tabs defaultActiveKey="birds1">
        <Tab eventKey="birds1" title="Birds.1">
          <Gallery tab="birds1" id={100}/>
        </Tab>
        <Tab eventKey="birds2" title="Birds.2">
          <Gallery tab="birds2" id={200}/>
        </Tab>
        <Tab eventKey="street1" title="Street.1">
          <Gallery tab="street1"/>
        </Tab>
        <Tab eventKey="street2" title="Street.2">
          <Gallery tab="street2"/>
        </Tab>
        <Tab eventKey="about" title="About">
          <About/>
        </Tab>
        <Tab eventKey="contact" title="Inquiries">
          <Contact/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;