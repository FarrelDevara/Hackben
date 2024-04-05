import React from 'react';

// Define interface for props
interface CarouselProps {
  // Define props here if there are any
}

// Define interface for state
interface CarouselState {
  currentSlide: number;
}

// Define images array
const images = [
  "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
  "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
];

// Define class component
class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  goToSlide = (slideIndex: number) => {
    this.setState({ currentSlide: slideIndex });
  };

  render() {
    const { currentSlide } = this.state;
    return (
      <div className="carousel w-full">
        {images.map((src, index) => (
          <div key={src} className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
            <img src={src} className="w-full" alt={`Slide ${index}`} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={() => this.goToSlide((index + images.length - 1) % images.length)}>❮</button>
              <button className="btn btn-circle" onClick={() => this.goToSlide((index + 1) % images.length)}>❯</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Carousel;
