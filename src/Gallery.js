import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap";
import imgLinks from "./ImgLinks";

export default class Gallery extends Component {
  state = {
    active: 0
  };

  handleClick = e => {
    const selection = typeof e !== "number" ? e.target.id : e
    this.setState({
      active: selection
    });
  };

  getCarouselItems() {
    return imgLinks.map(img => (
      <CarouselItem>
        <img className="gallery_carousel" src={img} alt="carousel" />
      </CarouselItem>
    ));
  }

  getGalleryItems(start, end) {
    return imgLinks
      .slice(start, end)
      .map(img => (
        <img
          key={img}
          className="gallery_img"
          src={img}
          alt="gallery"
          id={imgLinks.indexOf(img)}
          onClick={this.handleClick}
        />
      ));
  }

  render() {
    return (
      <div className="gallery">
        <Row className="gallery_row">
          <Col className="gallery_col">{this.getGalleryItems(0, 7)}</Col>
          <Col className="gallery_col">{this.getGalleryItems(7, 14)}</Col>
          <Col className="gallery_col">{this.getGalleryItems(13, 21)}</Col>
          <Col className="gallery_carousel">
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
