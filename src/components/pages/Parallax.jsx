import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { animatedItem, staggerItem, staggerList } from "../../lib/animations";
import { testimonials } from "../../lib/data";
import { DotButton, useDotButton } from "../embla/EblaCarouselDotButton";
// import { DotButton, useDotButton } from "../embla/EblaCarouselDotButton";
const TeamTestimonialOne = () => {
  const options = { align: "start", loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  return (
    <section className="py-20 px-6">
      <div className="w-full max-w-[1176px] mx-auto">
        <motion.h4
          variants={animatedItem({ y: 5 })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tag max-w-max"
        >
          Our Team's Thoughts
        </motion.h4>
        <motion.h5
          variants={animatedItem({ delay: 0.2, blur: 6 })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="title text-black-900 mt-5"
        >
          What our team says
        </motion.h5>
      </div>
      <div className="w-full max-w-[1196px] mx-auto mt-16">
        {/* carousel  */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <motion.div
            variants={staggerList({ duration: 0.3, delay: 0.1 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex"
          >
            {testimonials.map((item) => (
              <motion.div
                variants={staggerItem({ x: 30 })}
                className="relative flex-full px-3 border border-slate-900 rounded-3xl shadow-lg"
                key={item.id}
              >
                <div className="p-10 flex gap-8">
                  <div>
                    <img
                      src={item?.img}
                      className="w-full max-w-[216px] aspect-square rounded-full bg-blue-500 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <h4 className="text-3xl text-black-900 uppercase">
                          {item?.name}
                        </h4>
                        <p className="subtitle mt-3">{item?.position}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-xl text-black-900 leading-[175%]">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* dots  */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={` h-2.5 bg-blue-500 rounded-full duration-300 ${
                index == selectedIndex ? "w-12 opacity-100" : "w-2.5 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTestimonialOne;
