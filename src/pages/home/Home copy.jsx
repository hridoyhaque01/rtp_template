import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { animate } from "../../lib/animations";
import { debounce } from "../../lib/helpers";

function Home() {
  const options = { align: "start", loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [sticky, setSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sliders = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleWheel = debounce((event) => {
      if (!emblaApi || !isVisible) {
        setSticky(false);
        return;
      }
      if (event.deltaY > 0) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
          setSticky(true);
        } else {
          setSticky(false);
        }
      } else if (event.deltaY < 0) {
        if (emblaApi.canScrollPrev()) {
          emblaApi.scrollPrev();
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    }, 200);

    const currentCarouselRef = carouselRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (currentCarouselRef) {
      observer.observe(currentCarouselRef);
    }

    window.addEventListener("wheel", handleWheel);

    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef);
      }
      window.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi, isVisible]);

  return (
    <section>
      <div className="h-screen bg-blue-300"></div>
      <div className="relative">
        <div
          className={`w-full max-w-[1176px] mx-auto py-20 bg-yellow-50 duration-300 sticky top-0 ${
            sticky ? "scroll_show" : ""
          }`}
          id="carouselSection"
          ref={carouselRef}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#carouselSection"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {sliders.map((item, index) => (
                <motion.div
                  variants={animate({ x: 20 })}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[480px] px-3 select-none cursor-grab"
                  key={index}
                >
                  <div className="border h-40 flex items-center justify-center">
                    Slide {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* carousel area end */}

      <div className="h-screen bg-green-300"></div>
      <div className="h-screen bg-blue-300"></div>
      <div className="h-screen bg-green-300"></div>
    </section>
  );
}

export default Home;
