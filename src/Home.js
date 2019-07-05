import React, { Component } from "react";
import { Carousel, CarouselItem} from "react-bootstrap";
import imgLinks from "./Modules/ImgLinks";

export default class Home extends Component {
  getCarouselItems() {
    return imgLinks.featured.map(
      img => (
        <CarouselItem key={img}>
          <img className="gallery_carousel_featured" src={img} alt={`${img}-feat`} />
        </CarouselItem>
      )
    );
  }
  render() {
    return <Carousel>{this.getCarouselItems()}</Carousel>;
  }
}
