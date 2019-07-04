import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Gallery from "./Gallery";

export default class GalleryContainer extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="birds1" className="galleryTabs">
        <Tab eventKey="birds1" title="Birds.1">
          <Gallery tab="birds1" id={0} />
        </Tab>
        <Tab eventKey="birds2" title="Birds.2">
          <Gallery tab="birds2" id={24} />
        </Tab>
        <Tab eventKey="birds3" title="Birds.3">
          <Gallery tab="birds3" id={48} />
        </Tab>
        <Tab eventKey="street" title="Street">
          <Gallery tab="street" />
        </Tab>
      </Tabs>
    );
  }
}
