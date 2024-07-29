import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import useScrollParallax from "../../hooks/useScrollParallax";
function Home() {
  const { elementRect, wrapperRectRef, elementRef, elementRectRef, controls } =
    useScrollParallax();
  const { width, ref } = useScreenWidth();

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
      {/* carousel content start  */}
      <div className="w-full bg-black-900 py-12 px-6">
        <div className="w-full max-w-[1176px] mx-auto" ref={ref}>
          <h2 className="tag">Our Portfolio</h2>
          <div className="flex items-center justify-between gap-6 mt-3 sm:mt-4 md:mt-6">
            <h1 className="title text-white">Brilliant works</h1>
          </div>
        </div>

        <div className="ml-auto pl-6" style={{ width }}>
          <div
            style={elementRect ? { height: elementRect.width + "px" } : {}}
            ref={wrapperRectRef}
            className="relative"
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
        <div>
          <Link
            to="/"
            className="flex items-center justify-center max-w-max px-6 py-3 sm:my-5 text-xl bg-white rounded-full mx-auto"
          >
            All Portfolio
          </Link>
        </div>
      </div>
      {/* carousel content start  */}
      <div className="h-screen bg-blue-300"></div>
    </div>
  );
}

export default Home;

export const Card = ({ item }) => {
  return (
    <div className="p-3">
      <div className="flex flex-col gap-1 p-6 border w-[643px] backdrop-blur-sm rounded-lg shrink-0 text-white">
        <p className="text-3xl font-semibold">{item?.id}</p>
        <p className="text-5xl font-semibold">{item?.text}</p>
      </div>
    </div>
  );
};
