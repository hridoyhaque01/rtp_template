import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getSerializeData } from "../../lib/helpers";

function Parrallax() {
  const cards = [
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "01",
      text: "Loss of performance budget due to using CSS transforms",
      category: "development",
    },
    {
      id: "02",
      text: "Inaccessibility from no page search support and native scrollbar",
      category: "uiux",
    },
    {
      id: "03",
      text: "Non-negligible import costs (12.1kb - 24.34kb gzipped)",
      category: "development",
    },
    {
      id: "04",
      text: "Limited animation systems for complex, scroll-based animations",
      category: "design",
    },
    {
      id: "05",
      text: "Erasing native APIs like Intersection-Observer, CSS Sticky, etc.",
      category: "uiux",
    },
  ];

  const { serializedData, uniqueCategories = [] } = getSerializeData(cards);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate the progress based on how much the section is scrolled
        const scrollProgress =
          ((windowHeight - sectionTop) / (sectionHeight + windowHeight)) * 100;

        // Divide scroll into equal segments for the number of categories
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

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full relative">
      {/* Dummy Section before portfolio */}
      <div className="h-screen bg-blue-300"></div>

      {/* Main Parallax Section */}
      <div
        className="w-full bg-black-900 text-white py-12 relative"
        style={{ height: uniqueCategories?.length * 80 + "vh" }}
        ref={sectionRef}
      >
        <div className="w-full max-w-[1176px] mx-auto slider_wrap">
          <div className="flex items-end">
            <div className="flex-1">
              <h2 className="tag">Our Portfolio</h2>
              <div className="flex items-center justify-between gap-6 mt-3 sm:mt-4 md:mt-6">
                <h1 className="title ">Brilliant works</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {uniqueCategories?.map((category, index) => (
                <div key={index}>{category}</div>
              ))}
            </div>
          </div>

          {/* Parallax Cards with animation */}
          <div className="grid grid-cols-3 mt-10">
            <AnimatePresence key={activeIndex}>
              {serializedData[activeIndex]?.items?.map((item, catKey) => (
                <motion.div
                  key={catKey}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInUp}
                >
                  <Card item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div>Hello world</div>
        </div>
      </div>

      {/* Dummy Section after portfolio */}
      <div className="h-screen bg-green-300"></div>
    </div>
  );
}

export default Parrallax;

export const Card = ({ item }) => {
  return (
    <div className="p-3 w-full">
      <div className="flex flex-col gap-1 p-6 border w-full backdrop-blur-sm rounded-lg shrink-0 text-white">
        <p className="text-3xl font-semibold">{item?.id}</p>
        <p className="text-3xl font-semibold">{item?.text}</p>
      </div>
    </div>
  );
};
