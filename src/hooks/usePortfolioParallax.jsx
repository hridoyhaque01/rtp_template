import { useEffect, useRef, useState } from "react";
import { getSerializeData } from "../lib/helpers";

function usePortfolioParallax({ data = [] }) {
  const { serializedData, uniqueCategories = [] } = getSerializeData(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  let finalData = serializedData[activeIndex]?.items?.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollProgress =
          ((windowHeight - sectionTop) / (sectionHeight + windowHeight)) * 100;
        const segmentSize = 100 / serializedData.length;
        const index = Math.min(
          Math.floor(scrollProgress / segmentSize),
          serializedData.length - 1
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [serializedData]);

  return {
    activeIndex,
    uniqueCategories,
    serializedData,
    ref: sectionRef,
    data: finalData,
    length: uniqueCategories.length,
  };
}

export default usePortfolioParallax;
