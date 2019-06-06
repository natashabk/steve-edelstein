import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap";
import imgLinks from "./ImgLinks";

export default class Gallery extends Component {
  state = {
    active: this.props.tab === "one" ? 0 : 24
  };

  handleClick = e => {
    const selection = typeof e !== "number" ? e.target.id : e;
    this.setState({
      active: selection
    });
  };

  getCarouselItems() {
    return imgLinks.map(img => (
      <CarouselItem key={img}>
        <img className="gallery_carousel" src={img} alt="carousel"/>
      </CarouselItem>
    ));
  }

  getGalleryItems(start, end) {
    return imgLinks
      .slice(start, end)
      .map(img => (
        <img
          key={img.slice(73, 96)}
          className="gallery_img"
          src={img}
          alt="gallery"
          id={imgLinks.indexOf(img)}
          onClick={this.handleClick}
        />
      ));
  }

  render() {
    const ranges = this.props.tab === "one" ? [0,8,16,24] : [24,32,40,48];
    return (
      <div className="gallery">
        <Row className="gallery_row" noGutters={true}>
          <Col className="gallery_wrap_col">
            <Col xs={12}className="gallery_col">
              {this.getGalleryItems(ranges[0], ranges[1])}
            </Col>
            <Col xs={12}className="gallery_col">
              {this.getGalleryItems(ranges[1], ranges[2])}
            </Col>
            <Col xs={12}className="gallery_col">
              {this.getGalleryItems(ranges[2], ranges[3])}
            </Col>
          </Col>

          <Col sm={12} className="gallery_carousel">
            <Carousel
              slide={false}
              activeIndex={this.state.active}
              onSelect={this.handleClick}
              interval={null}
            >
              {this.getCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}
