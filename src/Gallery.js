import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap";
import imgLinks from "./Modules/ImgLinks";
import captions from "./Modules/ImgCaptions";

export default class Gallery extends Component {
  state = {
    active: 0,
    captions: captions(),
    brokenImgs: []
  };

  handleClick = e => {
    const selection = typeof e !== "number" ? Number(e.target.id) : e;
    this.setState({
      active: selection
    });
  };

  // getCarouselCaptions(id, img) {
  //   let idx = imgLinks[this.props.tab].indexOf(img) + 1;
  //   if (
  //     this.props.tab.includes("street") &&
  //     this.state.captions[this.props.tab][idx - 1]
  //   ) {
  //     return (
  //       <h2 id="textCaption">{this.state.captions[this.props.tab][idx - 1]}</h2>
  //     );
  //   } else {
  //     return <h2>#{id + idx}</h2>;
  //   }
  // }

  getCarouselItems() {
    return imgLinks[this.props.tab].map(img => {
      if (!this.state.brokenImgs.includes(img)) {
      return (
        <CarouselItem key={img}>
          <img className="gallery_carousel" src={img} alt={`${img}-lg`} />
          <Carousel.Caption>
            {/* {this.getCarouselCaptions(this.props.id, img)} */}
          </Carousel.Caption>
        </CarouselItem>
      );
    }
    })
  }

  getGalleryItems(start, end) {
    return imgLinks[this.props.tab].slice(start, end).map(
      img => {
        if (!this.state.brokenImgs.includes(img)) {
          return (
            <img
              key={img}
              className="gallery_img"
              src={img}
              id={imgLinks[this.props.tab].indexOf(img)}
              onClick={this.handleClick}
              alt={`${img}-thumb`}
              onError={() =>
                this.setState({
                  brokenImgs: this.state.brokenImgs.concat(img)
                })
              }
            />
          );
        }
      }
    );
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
