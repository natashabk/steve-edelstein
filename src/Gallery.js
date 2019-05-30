import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col, Table } from "react-bootstrap";
import one from "./Images/one.jpg";
import two from "./Images/two.jpg";
import three from "./Images/three.jpg";
import four from "./Images/four.jpg";
import five from "./Images/five.jpg";
import six from "./Images/six.jpg";
import seven from "./Images/seven.jpg";
import eight from "./Images/eight.jpg";
import nine from "./Images/nine.jpg";
import ten from "./Images/ten.jpg";

const images= [one, two, three, four, five, six, seven, eight, nine, ten]

export default class Gallery extends Component {
  getCarouselItems(){
   return images.map(img=> 
      <CarouselItem>
        <img src={img}></img>
        </CarouselItem>
    )
  }
  
  render() {
    return (
      <div className="Gallery">
      <Row>
        <Col className="gallery_grid">
        <Table>
          <tr>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={one}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={two}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={three}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={four}></img></td>
          </tr>
          <tr>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={five}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={six}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={seven}></img></td>
            <td className="gallery_grid_container"><img className="gallery_grid_img" src={eight}></img></td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
          </tr>
        </Table>
        </Col>
        <Col>
        <Carousel id="gallery_feature" slide={false}>
          {this.getCarouselItems()}
        </Carousel>
        </Col>
        </Row>
      </div>
    );
  }
}
