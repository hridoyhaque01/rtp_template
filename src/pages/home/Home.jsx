import { useRect } from "@studio-freight/hamo";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

const clamp = (min, value, max) => Math.min(Math.max(value, min), max);
const mapRange = (from, to, value, min, max) =>
  ((value - from) * (max - min)) / (to - from) + min;

function Home() {
  const elementRef = useRef(null);
  const [wrapperRectRef, wrapperRect] = useRect();
  const [elementRectRef, elementRect] = useRect();
  const { height: windowHeight } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState();
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    if (!wrapperRect || !elementRect || !elementRef.current) return;

    const start = wrapperRect.top - windowHeight;
    const end = wrapperRect.top + wrapperRect.height - windowHeight;

    let progress = mapRange(start, end, window.scrollY, 0, 1);
    progress = clamp(0, progress, 1);
    const offset = 200;
    const x = progress * (elementRect.width - windowWidth) - offset;

    console.log({ x });

    controls.start({
      x: -x,
      transition: { ease: "linear", duration: 0 },
    });
  }, [controls, elementRect, wrapperRect, windowHeight, windowWidth]);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(
        Math.min(window.innerWidth, document.documentElement.offsetWidth)
      );
    };

    window.addEventListener("resize", onResize, false);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const cards = [
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
    },
    {
      id: "02",
      text: "Inaccessibility from no page search support and native scrollbar",
    },
    {
      id: "03",
      text: "Non-negligible import costs (12.1kb - 24.34kb gzipped)",
    },
    {
      id: "04",
      text: "Limited animation systems for complex, scroll-based animations",
    },
    {
      id: "05",
      text: "Erasing native APIs like Intersection-Observer, CSS Sticky, etc.",
    },
  ];

  return (
    <div className="w-full relative">
      <div className="h-screen bg-blue-300"></div>
      <div className="pl-20  py-10">
        <div
          className="wrapper relative"
          style={elementRect ? { height: elementRect.width + "px" } : {}}
          ref={wrapperRectRef}
        >
          <div className="flex overflow-hidden slider_wrap">
            <motion.div
              className="flex"
              ref={(node) => {
                elementRef.current = node;
                elementRectRef(node);
              }}
              animate={controls}
            >
              {cards.map((item) => (
                <Card key={item.id} item={item}></Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-blue-300"></div>
    </div>
  );
}

export default Home;

export const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-1 p-8 border w-[643px] backdrop-blur-sm rounded-lg shrink-0">
      <p className="text-3xl font-semibold">{item?.id}</p>
      <p className="text-5xl font-semibold">{item?.text}</p>
    </div>
  );
};
