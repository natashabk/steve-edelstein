import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap";
import imgLinks from "./ImgLinks";

export default class Gallery extends Component {
  state = {
    active: this.props.tab === "birds1" ? 0 : 24
  };

  handleClick = e => {
    const selection = typeof e !== "number" ? Number(e.target.id) : e;
    this.setState({
      active: selection
    });
  };

  getCarouselItems() {
    return imgLinks[this.props.tab].map(img => (
      <CarouselItem key={img}>
        <img
          className="gallery_carousel"
          src={img}
          alt={`${img}-full`}
        />
        <Carousel.Caption>
          <h2>#{this.props.id + imgLinks[this.props.tab].indexOf(img) + 1}</h2>
        </Carousel.Caption>
      </CarouselItem>
    ));
  }

  getGalleryItems(start, end) {
    return imgLinks[this.props.tab]
      .slice(start, end)
      .map(img => (
        <img
          key={img}
          className="gallery_img"
          src={img}
          alt={`${img}-thumb`}
          id={imgLinks[this.props.tab].indexOf(img)}
          onClick={this.handleClick}
        />
      ));
  }

  render() {
    return (
      <div className="gallery">
        <Row className="gallery_row" noGutters={true}>
          <Col className="gallery_wrap_col">
            <Col xs={12} className="gallery_col">
              {this.getGalleryItems(0, 8)}
            </Col>
            <Col xs={12} className="gallery_col">
              {this.getGalleryItems(8, 16)}
            </Col>
            <Col xs={12} className="gallery_col">
              {this.getGalleryItems(16, 24)}
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
