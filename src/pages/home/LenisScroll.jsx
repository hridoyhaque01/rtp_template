import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { portfolios } from "../../lib/data";
import { getSerializeData } from "../../lib/helpers";

function LenisScroll() {
  const sectionRef = useRef(null);
  const { uniqueCategories, serializedData } = getSerializeData(portfolios);
  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);
  const lastScrollProgressRef = useRef(0);
  const threshold = 0.05;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll Progress:", latest); // Log the scroll progress
      if (Math.abs(latest - lastScrollProgressRef.current) >= threshold) {
        lastScrollProgressRef.current = latest;
        const currentIndex = Math.floor(latest * uniqueCategories.length);
        console.log("Current Index:", currentIndex); // Log the current index
        if (uniqueCategories[currentIndex]) {
          setActiveCategory(uniqueCategories[currentIndex]);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, threshold, uniqueCategories]);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-6 bg-black-900 text-white"
      data-lenis-scroll-snap-align="start"
    >
      <div className="containerX">
        <div className="grid md:grid-cols-5 gap-6 mb-20">
          <div className="flex-1 md:col-span-2 h-full">
            <div className="sticky top-1/3">
              <h2 className="tag bg-black-500 text-main-600 text-xl mx-auto md:mx-0">
                Our Portfolio
              </h2>
              <h3 className="title mt-2.5">Brilliant works</h3>
              <ul className="flex md:flex-col items-center justify-center md:items-start gap-x-10 gap-y-7 mt-10">
                {uniqueCategories?.map((item, index) => (
                  <li
                    className={`flex items-center gap-2 text-base sm:text-lg md:text-xl group ${
                      item === activeCategory ? "font-bold text-main-600" : ""
                    } `}
                    key={index}
                  >
                    <div
                      className={`w-2 aspect-square  rounded-full relative ${
                        item === activeCategory ? "bg-main-600" : "bg-white"
                      } after:absolute after:content-[''] after:w-8 after:h-0.5 md:after:h-8 md:after:w-0.5 after:bg-white after:top-[3px] after:right-3  md:after:top-3 md:after:left-[3px] group-first:after:hidden md:group-first:after:block md:group-last:after:hidden`}
                    ></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="md:col-span-3">
            <div className="grid sm:grid-cols-2 gap-x-6">
              {serializedData?.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default LenisScroll;

export const Card = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.44], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

  return (
    <motion.div
      ref={ref}
      className="w-full group rounded-2xl overflow-hidden bg-black-500 hover:bg-yellow-400 duration-300 cursor-pointer"
      style={{
        y,
        opacity,
        filter: blur,
      }}
    >
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
    </motion.div>
  );
};
