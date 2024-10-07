import { AnimatePresence, motion } from "framer-motion";
import usePortfolioParallax from "../../hooks/usePortfolioParallax";
import { portfolios } from "../../lib/data";

function Parrallax() {
  const { activeIndex, uniqueCategories, length, ref, data } =
    usePortfolioParallax({ data: portfolios });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Added scale for zoom-out effect
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }, // Zoom-in effect
    exit: { opacity: 0, y: -50, scale: 0.8, transition: { duration: 0.5 } }, // Exit zoom-out
  };

  return (
    <div className="w-full relative">
      {/* Dummy Section before portfolio */}
      <div className="h-screen bg-blue-300"></div>

      <div
        className="w-full bg-black-900 text-white py-12 px-6 relative sticky-section"
        ref={ref}
        style={{ height: `calc(var(--vh, 1vh) * ${length * 85})` }}
      >
        <div className="containerX slider_wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <h2 className="tag bg-black-500 text-main-600 text-xl">
                Our Portfolio
              </h2>
              <div className="flex items-center justify-between gap-6 mt-3 sm:mt-4 md:mt-6">
                <h1 className="title ">Brilliant works</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {uniqueCategories?.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 duration-300 ${
                    activeIndex === index
                      ? "font-semibold text-base text-main-600"
                      : "text-sm text-white"
                  }`}
                >
                  <span>{category}</span>

                  {index + 1 !== length && (
                    <div className="w-[30px] h-0.5 bg-main-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 sm:mt-12 md:mt-[60px]">
            <AnimatePresence key={activeIndex}>
              {data?.map((item, catKey) => (
                <motion.div
                  key={catKey}
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                  variants={fadeInUp}
                  viewport={{ once: true }} // Optional
                >
                  <Card item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
    <div className="w-full group rounded-2xl overflow-hidden bg-black-500 hover:bg-yellow-400 duration-300 cursor-pointer">
      <div className="w-full overflow-hidden h-[212px]">
        <img
          src={item?.featuredImage}
          alt="portfolio featured image"
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div className="pt-[1.15rem] pb-6 px-[1.5rem]">
        <h2 className="text-base sm:text-xl md:text-[1.75rem] font-extrabold line-clamp-2 !leading-[120%] text-white group-hover:text-black-900 duration-300">
          {item?.title}
        </h2>
      </div>
    </div>
  );
};
