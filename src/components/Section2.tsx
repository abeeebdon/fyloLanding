import { data } from "@/components/Data";
import { motion } from "motion/react";

import { FaArrowAltCircleRight } from "react-icons/fa";
const Section2 = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <article className="dark:bg-gradient-to-b from-[#1d2029] to-background-main">
      <section className="container mb-20 md:flex space-y-6 md:space-y-0  gap-10 md:justify-center md:items-center ">
        <motion.div
          whileInView={{
            y: [-20, 0, -20],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="md:basis-[50%] flex justify-center mx-auto"
        >
          <img
            src={
              darkMode
                ? "/images/illustration-stay-productive.png"
                : "/images/illustration-2.svg"
            }
            alt="image"
          />
        </motion.div>

        <div className="md:basis-1/2 max-w-xl mx-auto text-center md:text-left ">
          <h3 className="font-bold text-4xl text-dblue dark:text-white">
            Stay productive,
            <br /> wherever you are
          </h3>
          <p className="my-2">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="mt-2 w-full  justify-center md:justify-start  p-1 flex items-center gap-4">
            <p className="border-b border-brightBlue text-brightBlue">
              See how Fylo works
            </p>
            <FaArrowAltCircleRight className="text-brightBlue" />
          </div>
        </div>
      </section>

      {/* Testimonials section  */}
      <div className="py-10 container mt-10 mb-20">
        <div className="max-w-6xl mx-auto">
          <img src="/images/bg-quotes.png" alt="quotes" />
          <section className="mt-1 md:flex items-center justify-center space-y-6 md:space-y-0 gap-6">
            {data.comments.map((item, i) => {
              const { name, details, comment, img } = item;
              return (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    fontSize: "17px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "linear",
                  }}
                  className="max-w-md mx-auto shadow p-6 bg-slate-100  dark:bg-background-testimonials rounded-2xl"
                  key={i}
                >
                  <p>{comment}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={`/images/${img}.jpg`}
                      width="40px"
                      height="40px"
                      className="rounded-full"
                    />
                    <div className="commentator">
                      <p className="text-sm font-bold">{name}</p>
                      <p className="text-xs"> {details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </section>
        </div>
      </div>
    </article>
  );
};

export default Section2;
