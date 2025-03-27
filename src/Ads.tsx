import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

const Ads = ({ setPop }: { setPop: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <section className="fixed flex items-center justify-center inset-0 bg-black/80">
      <div className="w-full max-w-lg bg-white rounded-2xl p-5">
        <FaTimes color="black" size={26} onClick={() => setPop(false)} />
        <div className="mt-5 text-black text-center">
          <p className="text-lg animate-pulse">
            Thanks for visiting, For your website with dynamic and sleek user
            interface and experience.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <p className="text-[#ff0088]">Contact me: +2349075318511</p>
            <p>abeebdon@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
