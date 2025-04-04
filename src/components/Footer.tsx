import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-dblue dark:bg-[#0b1526] text-white px-4 pt-[100px]">
      <div className="container gap-4 space-y-6 md:space-y-0 md:base-flex flex-wrap">
        <div className="basis-[30%] ">
          <img
            src="/images/dlogo.svg"
            alt="n"
            width="100px"
            className="heading-logo"
          />
          <div className="mt-4 base-flex">
            <img src="/images/icon-location.svg" alt="location" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              obcaecati dolorum, blanditiis officiis aperiam molestiae ea
              deserunt
            </p>
          </div>
        </div>

        <div className="basis-[20%]  space-y-2">
          <div className="flex items-center gap-3">
            <FiPhoneCall /> +234-700-700-700
          </div>
          <div className="flex items-center gap-3">
            <CiMail fontSize={20} className="font-bold text-white" />{" "}
            example@fylo.com
          </div>
        </div>
        <div className="basis-[12%]  list-none">
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
        <div className="basis-[12%]">
          <ul className="footer-links flex flex-col gap-4">
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
        <div className=" flex justify-center mt-6 gap-4 [&_svg]:text-2xl ">
          <FaFacebookF className="hover:border hover:p-1 rounded-full border-white" />
          <FaX className="hover:border hover:p-1 rounded-full border-white" />
          <FaInstagram className="hover:border hover:p-1 rounded-full border-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
