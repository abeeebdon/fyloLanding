import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

const Ads = ({ setPop }: { setPop: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <section className="fixed flex items-center justify-center inset-0 bg-black/80">
      <div className="w-full max-w-lg bg-white">
        <FaTimes onClick={() => setPop(false)} />
        <p>Add</p>
      </div>
    </section>
  );
};

export default Ads;
