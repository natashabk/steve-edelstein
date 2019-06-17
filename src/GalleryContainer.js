import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Gallery from "./Gallery";

export default class GalleryContainer extends Component {

  render(){
    return (
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
</Tabs>
    )
  }
}