import { useRect } from "@studio-freight/hamo";
import { useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { clamp, mapRange } from "../lib/helpers";

function useScrollParallax(obj) {
  const { offset = 300 } = obj || {};
  const elementRef = useRef(null);
  const [wrapperRectRef, wrapperRect] = useRect();
  const [elementRectRef, elementRect] = useRect();
  const { height: windowHeight } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState();
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    if (!wrapperRect || !elementRect || !elementRef.current) return;

    const start = wrapperRect.top + offset - windowHeight;
    const end = wrapperRect.top + wrapperRect.height - windowHeight;

    let progress = mapRange(start, end, window.scrollY, 0, 1);
    progress = clamp(0, progress, 1);
    const x = progress * (elementRect.width - windowWidth);
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

  return {
    elementRect,
    wrapperRectRef,
    elementRef,
    elementRectRef,
    controls,
  };
}

export default useScrollParallax;
