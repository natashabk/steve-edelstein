import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.scss";
import "./Mobile.scss";
import Contact from "./Contact";
import About from "./About";
import Gallery from "./GalleryContainer";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <h1 id="name">Steve Edelstein</h1>
      <h4 id="subheading">color photography</h4>
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <Home/>
        </Tab>
        <Tab eventKey="gallery" title="Galleries" className="galleries">
          <Gallery/>
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