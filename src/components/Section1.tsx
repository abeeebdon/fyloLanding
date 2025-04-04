import { data } from "@/components/Data";
import { motion } from "motion/react";

const Section1 = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-[url('/images/bg-curve-mobile.svg')] sm:bg-[url('/images/bg-curve-desktop.svg')]  bg-top dark:bg-center dark:bg-[url('/images/bg-curvy-mobile.svg')] sm:dark:bg-[url('/images/dark-bg-curvy-desktop.svg')] "
    >
      <section className="mx-auto max-w-5xl py-[80px] px-4 gap-10 grid grid-cols-1 sm:grid-cols-2 place-items-center ">
        {data.seg1.map((item, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }} // Even slides from right, Odd from left
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-center max-w-sm space-y-2"
              key={i}
            >
              <div className="text-center w-fit mx-auto">
                <img src={`/images/${item.img}.svg`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{item.heading}</h3>
              </div>
              <p className="text-black dark:text-white">{item.paragraph}</p>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Section1;
