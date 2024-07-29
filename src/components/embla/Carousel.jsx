// Carousel.js
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef } from "react";

const Carousel = ({ reverse }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  useEffect(() => {
    if (emblaApi) {
      if (reverse) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi, reverse]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
        <div className="embla__slide">Slide 3</div>
        <div className="embla__slide">Slide 3</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default Carousel;
