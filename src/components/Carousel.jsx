import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      imgScroll: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      imgScroll: (prevState.imgScroll + 1) % images.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      imgScroll: (prevState.imgScroll - 1 + images.length) % images.length,
    }));
  };

  render() {
    return (
      <div className="container">
        <ArrowBackIosIcon className="arrow" onClick={this.handlePrev} />
        <div
          className="subContainer"
          style={{
            backgroundImage: `url(${images[this.state.imgScroll].img})`,
            height: '800px',
            width: '500px',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1>{images[this.state.imgScroll].title}</h1>
          <h2>{images[this.state.imgScroll].subtitle}</h2>
        </div>
        <ArrowForwardIosIcon className="arrow" onClick={this.handleNext} />
      </div>
    );
  }
}

export default Carousel;
