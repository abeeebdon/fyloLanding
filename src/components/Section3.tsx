import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

const Section3 = ({
  setPop,
}: {
  setPop: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPop(true);
  };
  return (
    <div className="bg-blue  dark:bg-transparent ">
      <section className="xl:absolute left-0 right-0 bottom-[80%] xl:m-auto z-20 max-w-3xl mx-auto p-10 bg-blue m-10 mb-0 dark:bg-[#1c2431] text-white rounded-lg">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Get early access today</h3>
          <p className="text-base my-6">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
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
              background: "linear-gradient(120deg, rgb(101,240,255), #339ecc)",
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
  );
};

export default Section3;
