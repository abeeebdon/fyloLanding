import { motion } from "motion/react";
import { HeroProps } from "./types";
const Hero = ({ darkMode, setPop }: HeroProps) => {
  return (
    <section className="max-w-[1400px] p-6  my-10 mx-auto flex flex-col gap-10 md:flex-row-reverse md:base-flex">
      {/* Illustration */}
      <div className="basis-1/2">
        <img
          src={
            darkMode
              ? "/images/illustration-intro.png"
              : "/images/illustration-1.svg"
          }
          alt="illustration"
        />
      </div>
      <article className="md:basis-1/2">
        <div className="section-one-text md:text-left text-center">
          <h3 className="font-bold text-4xl sm:text-4xl dark:text-white text-dblue">
            All your files in one secure location,
            <br /> accesible anywhere.
          </h3>
          <p className="my-4 text-xl text-dblue dark:text-white">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers
          </p>
        </div>
        <div className="w-full flex md:justify-start justify-center items-center">
          <motion.button
            onClick={() => setPop(true)}
            whileHover={{
              background: "linear-gradient(120deg, rgb(101,226,255), #339ecc)",
              color: "#FFF",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-4 py-2 text-white  bg-[#339ecc] text-lg  rounded-2xl w-full max-w-56  font-bold"
          >
            Get Started
          </motion.button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
