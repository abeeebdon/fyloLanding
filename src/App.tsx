import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

import {
  FaArrowAltCircleRight,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { data } from "./Data";
import { FaX } from "react-icons/fa6";
import Hero from "./Hero";
import Header from "./Header";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import Ads from "./Ads";

function App() {
  const [pop, setPop] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPop(true);
  };
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 50,
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <main className=" dark:bg-background-main text-black dark:text-white min-h-screen">
        {/* Header  */}
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        {/* Hero section  */}
        <Hero darkMode={darkMode} setPop={setPop} />

        {/* Access with curve  */}
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
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
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

        <article className="relative xl:mt-[250px] ">
          <div className="bg-blue  dark:bg-transparent ">
            <section className="xl:absolute left-0 right-0 bottom-[80%] xl:m-auto z-20 max-w-3xl mx-auto p-10 bg-blue m-10 mb-0 dark:bg-[#1c2431] text-white rounded-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold">Get early access today</h3>
                <p className="text-base my-6">
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
                </p>
              </div>
              <form
                className="sm:flex-row flex-col flex gap-4 items-center justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border-none outline-none rounded-2xl px-4 py-2 text-black basis-[60%]"
                />
                <motion.button
                  type="submit"
                  whileHover={{
                    background:
                      "linear-gradient(120deg, rgb(101,240,255), #339ecc)",
                    color: "#FFF",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 py-2 text-white  bg-[#339ecc] text-lg  rounded-2xl w-full max-w-56  font-bold"
                >
                  Get Started For Free
                </motion.button>
              </form>
            </section>
          </div>

          <footer className="bg-dblue dark:bg-[#0b1526] text-white px-4 py-[100px]">
            <div className="container gap-4 space-y-4 sm:space-y-0 sm:base-flex flex-wrap">
              <div className="basis-[40%]">
                <img
                  src="/images/dlogo.svg"
                  alt="n"
                  width="100px"
                  className="heading-logo"
                />
                <div className="mt-4 base-flex">
                  <img src="/images/icon-location.svg" alt="location" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Hic obcaecati dolorum, blanditiis officiis aperiam molestiae
                    ea deserunt
                  </p>
                </div>

                <div className=" flex mt-6 gap-4 [&_svg]:text-2xl ">
                  <FaFacebookF className="hover:border hover:p-1 rounded-full border-white" />
                  <FaX className="hover:border hover:p-1 rounded-full border-white" />
                  <FaInstagram className="hover:border hover:p-1 rounded-full border-white" />
                </div>
              </div>

              <div className="basis-[25%] space-y-2">
                <div className="flex items-center gap-3">
                  <FiPhoneCall /> +234-700-700-700
                </div>
                <div className="flex items-center gap-3">
                  <CiMail fontSize={20} className="font-bold text-white" />{" "}
                  example@fylo.com
                </div>
              </div>
              <div className="basis-[15%] list-none">
                <li>
                  <a href="#">About Us </a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </div>
              <div className="basis-[15%] ">
                <ul className="footer-links flex sm:flex-col gap-4">
                  <li>
                    <a href="#">Contact Us </a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </article>
        {pop && <Ads setPop={setPop} />}
      </main>
    </>
  );
}

export default App;
